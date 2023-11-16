import { HeaderCartIcon } from "@/assets/vector";
import { OpenCartButton } from "./styles";

export default function HeaderCartButton() {
  return (
    <OpenCartButton>
      <HeaderCartIcon/> <span>0</span>
    </OpenCartButton>
  )
}