"use client";

import { cn } from "@lib/utils";
import Icon from "@components/icon";
import { Button } from "@components/ui/button";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export const BtnCopyCredentialId = ({
  credentialId,
}: {
  credentialId: string;
}) => {
  const [copied, setCopied] = useState<"copied" | "error" | undefined>();

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
        await navigator.clipboard.writeText(credentialId);
      } else {
        fallbackCopy(credentialId);
      }

      setCopied("copied");
      toast.success("Sucesso ao copiar");
    } catch (err) {
      setCopied("error");
      toast.error("Erro ao copiar");
    } finally {
      setTimeout(() => setCopied(undefined), 1500);
    }
  }, [credentialId]);

  return (
    <Button
      variant="outline"
      size="icon"
      className="disabled:opacity-100 size-8 cursor-pointer"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      disabled={copied !== undefined}
    >
      <div
        className={cn(
          "transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        {copied === "copied" && (
          <Icon
            name="Check"
            className="stroke-emerald-500"
            size={6}
            aria-hidden="true"
          />
        )}
        {copied === "error" && (
          <Icon
            name="X"
            className="stroke-red-500"
            size={6}
            aria-hidden="true"
          />
        )}
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <Icon name="Copy" size={6} aria-hidden="true" />
      </div>
    </Button>
  );
};
