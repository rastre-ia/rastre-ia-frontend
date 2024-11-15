import { useState, useEffect, FormEvent } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import {
  Upload,
  ArrowLeft,
  Camera,
  MapPin,
  FileText,
  User,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Link } from "react-router-dom";

// Defina tipos para a posição e setPosition
interface LatLng {
  lat: number;
  lng: number;
}

interface LocationMarkerProps {
  position: LatLng | null;
  setPosition: (position: LatLng) => void;
}

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : <Marker position={position} />;
}

export default function RegisterItem() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const center: LatLng = { lat: -23.564, lng: -46.652 };
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkMobile();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Formulário enviado");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para a Home
            </Button>
          </Link>
          <AnimatedLogo className="text-3xl font-bold text-primary" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Registrar Item Roubado</CardTitle>
            <CardDescription>
              Forneça detalhes sobre o item roubado para ajudar na recuperação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Label
                  htmlFor="object"
                  className="flex items-center gap-2 mb-2"
                >
                  <FileText className="h-4 w-4" />
                  Qual é o objeto?
                </Label>
                <Input id="object" placeholder="ex: iPhone 12, Relógio Rolex" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label
                  htmlFor="picture"
                  className="flex items-center gap-2 mb-2"
                >
                  <Camera className="h-4 w-4" />
                  Foto do objeto
                </Label>
                <Input id="picture" type="file" accept="image/*" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label
                  htmlFor="description"
                  className="flex items-center gap-2 mb-2"
                >
                  <FileText className="h-4 w-4" />
                  Descrição do objeto
                </Label>
                <Textarea
                  id="description"
                  placeholder="Forneça uma descrição detalhada do item"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  Local do incidente
                </Label>
                <div className="h-[300px] mt-2 rounded-md overflow-hidden">
                  <MapContainer
                    center={center}
                    zoom={9}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker
                      position={position}
                      setPosition={setPosition}
                    />
                  </MapContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Label
                  htmlFor="event-description"
                  className="flex items-center gap-2 mb-2"
                >
                  <FileText className="h-4 w-4" />
                  Descrição do evento
                </Label>
                <Textarea
                  id="event-description"
                  placeholder="Descreva como ocorreu o roubo"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Label
                  htmlFor="robber-characteristics"
                  className="flex items-center gap-2 mb-2"
                >
                  <User className="h-4 w-4" />
                  Características do ladrão
                </Label>
                <Textarea
                  id="robber-characteristics"
                  placeholder="Descreva quaisquer características notáveis do ladrão"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button type="submit" className="w-full">
                  <Upload className="mr-2 h-4 w-4" /> Registrar Item Roubado
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
