import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Shield,
  Search,
  FileText,
  MessageSquare,
  HelpCircle,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedLogo from "@/components/AnimatedLogo";
import ProcessFlux from "@/components/ProcessFlux";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  const ref = useRef<HTMLDivElement>(null);
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
      <Card className="h-full">
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

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            <AnimatedLogo className="inline" />
          </Link>
          <div className="space-x-4">
            {/* <Link to="/register">
              <Button variant="ghost">Registrar Item</Button>
            </Link>
            <Link to="/new-report">
              <Button variant="ghost">Enviar Denúncia</Button>
            </Link> */}
            <Link to="/login">
              <Button>Entrar</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
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
            Empoderando comunidades e policiais com recuperação de itens
            roubados e assistência pública usando IA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            <Link to="/register">
              <Button size="lg">Registrar Item Roubado</Button>
            </Link>
            <Link to="/new-report">
              <Button size="lg" variant="outline">
                Enviar Denúncia
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
              icon={Shield}
              title="Registrar Itens"
              description="Denuncie itens roubados com descrições detalhadas e localização."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Denúncia com IA"
              description="Envie denúncias pelo assistente de chat de IA ou por formulário."
            />
            <FeatureCard
              icon={Search}
              title="Busca Avançada"
              description="Nossos algoritmos de IA ajudam a localizar itens roubados."
            />
            <FeatureCard
              icon={HelpCircle}
              title="Assistência Pública"
              description="Contribua para investigações com informações valiosas."
            />
            <FeatureCard
              icon={Award}
              title="Experiência Gamificada"
              description="Ganhe XP, suba de nível e colete medalhas ao contribuir."
            />
            <FeatureCard
              icon={FileText}
              title="Painel Completo"
              description="Acesse seu perfil, acompanhe seu impacto e gerencie contribuições."
            />
          </div>
        </section>

        <ProcessFlux />

        <section className="container mx-auto px-6 py-20">
          <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Junte-se à Luta Contra o Crime
            </h2>
            <p className="text-lg mb-8">
              O RastreIA é mais que uma ferramenta – é uma iniciativa da
              comunidade contra roubos, assistindo as autoridades. Com a
              tecnologia de IA e colaboração, tornamos as comunidades mais
              seguras, uma denúncia de cada vez.
            </p>
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Registrar Item Roubado
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} RastreIA. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
