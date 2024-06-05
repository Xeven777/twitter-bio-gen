import React, { useState } from "react";
import { Button } from "../ui/button";
import { Confetti } from "../magicui/confetti";

const CopyLabel = ({ text }: { text: string }) => {
  const [label, setLabel] = useState("copy");

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy the text: ", err);
    }
    Confetti({});
    setLabel("copied!");
  };

  return (
    <Button
      onClick={handleClick}
      className="text-sm text-muted-foreground bg-background my-0 h-auto rounded-none border border-primary/20 border-t-0 rounded-b-lg hover:bg-primary hover:text-primary-foreground pt-0 pb-0.5"
    >
      {label}
    </Button>
  );
};

export default CopyLabel;
