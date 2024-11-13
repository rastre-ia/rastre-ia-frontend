import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { Shield, Search, FileText, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AnimatedLogo from "@/components/AnimatedLogo";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-6 w-6 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/">
            <AnimatedLogo className="text-2xl font-bold" />
          </Link>
          <div className="space-x-4">
            <Link to="/register">
              <Button variant="ghost">Registrar Item</Button>
            </Link>
            <Link to="/login">
              <Button>Login da Polícia</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20 flex-grow">
        <section className="container mx-auto px-6 py-20 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bem-vindo ao <AnimatedLogo className="inline" />
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empoderando comunidades e autoridades com recuperação de itens
            roubados baseada em IA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/register">
              <Button size="lg" className="mr-4">
                Registrar Item Roubado
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Login da Polícia
              </Button>
            </Link>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FileText}
              title="Registrar Itens"
              description="Relate itens roubados com descrições detalhadas e dados de localização."
            />
            <FeatureCard
              icon={Search}
              title="Busca com IA"
              description="Nossos algoritmos avançados de IA ajudam a localizar itens roubados."
            />
            <FeatureCard
              icon={Shield}
              title="Acesso à Polícia"
              description="Pessoal autorizado pode acessar e analisar dados de itens roubados."
            />
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/placeholder.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Junte-se à Luta Contra o Roubo
            </h2>
            <p className="text-lg mb-8">
              O RastreIA é mais que uma ferramenta—é uma iniciativa comunitária
              para combater o roubo e recuperar itens roubados. Ao utilizar
              tecnologia de IA e colaborar com as autoridades, estamos tornando
              nossas comunidades mais seguras.
            </p>
            <Link to="/register">
              <Button size="lg" className="group">
                Comece Agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
