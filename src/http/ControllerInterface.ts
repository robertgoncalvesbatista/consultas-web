import type { AcordosLeniencia } from "@/types/AcordosLeniencia";

class ControllerInterface {
  async AcordosLeniencia(): Promise<AcordosLeniencia> {
    throw new Error("Erro de conexão com API");
  }
}

export default ControllerInterface;
