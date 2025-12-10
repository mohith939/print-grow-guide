import { MessageCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border p-3 md:hidden">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="whatsapp"
          size="sm"
          className="flex-1 max-w-[120px]"
          asChild
        >
          <a
            href="https://wa.me/918639471849"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </Button>
        <Button
          variant="default"
          size="sm"
          className="flex-1 max-w-[120px]"
          asChild
        >
          <a href="tel:+918639471849">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 max-w-[120px]"
          asChild
        >
          <a
            href="https://maps.google.com/?q=SSS+Graphics+Balkampet+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="w-4 h-4" />
            Location
          </a>
        </Button>
      </div>
    </div>
  );
}
