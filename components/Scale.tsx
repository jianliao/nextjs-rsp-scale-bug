import { useProvider } from "@adobe/react-spectrum";

export default function Scale() {
  let { scale } = useProvider();
  console.log(scale);
  return scale === "large" ? (
    "Large"
  ) : (
    "Medium"
  );
}
