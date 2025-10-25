"use client";

import { contato } from "@data/index";
import Icon from "@components/icon";
import { Button } from "@components/ui/button";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { cn } from "@lib/utils";

export const BtnLinkEmail = ({ className }: { className?: string }) => {
  const [copied, setCopied] = useState<"copied" | "error" | undefined>(
    undefined
  );

  function fallbackCopy(text: string) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(contato.email.valor);
      } else {
        fallbackCopy(contato.email.valor);
      }

      setCopied("copied");
      toast.success("Sucesso ao copiar e-mail");
    } catch {
      setCopied("error");
      toast.error("Erro ao copiar e-mail");
    } finally {
      setTimeout(() => setCopied(undefined), 1500);
    }
  }, []);

  return (
    <Button
      variant="outline"
      size="lg"
      className={cn("group disabled:opacity-100 cursor-pointer", className)}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      disabled={copied !== undefined}
    >
      {copied === "copied" && (
        <>
          <Icon
            name="Check"
            className="stroke-emerald-500"
            size={6}
            aria-hidden="true"
          />
          Copiado
        </>
      )}
      {copied === "error" && (
        <>
          <Icon
            name="X"
            className="stroke-red-500"
            size={6}
            aria-hidden="true"
          />
          Erro ao copiar
        </>
      )}
      {copied === undefined && (
        <div
          className={cn(
            "transition-all flex flex-row justify-center items-center",
            copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
        >
          <Icon
            name="Mail"
            className="mr-2 h-5 w-5 group-hover:animate-bounce"
          />
          Entre em Contato
        </div>
      )}
    </Button>
  );
};
