import { IconBrandTwitter } from "@tabler/icons-react";
import { Button, ButtonProps } from "@mantine/core";

export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) {
  return (
    <Button
      leftIcon={<IconBrandTwitter size={16} color="#00ACEE" fill="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
}
