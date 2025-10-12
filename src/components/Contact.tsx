import React from "react";
import { Button } from "@/components/ui/button";
import { socials } from "@/constants/socials";
import { IconMail } from "@tabler/icons-react";

export const Contact = () => {
  return (
    <div className="space-y-6">
      <div>
        <a href="mailto:mayowaobi74@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button className="w-full flex items-center justify-center gap-2">
            <IconMail size={20} />
            Email Me Directly
          </Button>
        </a>
      </div>

      <div className="text-center text-sm text-neutral-600 mb-4">
        Or reach out via social platforms:
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {socials.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <IconComponent size={20} />
                {social.label}
              </Button>
            </a>
          );
        })}
      </div>
    </div>
  );
};
