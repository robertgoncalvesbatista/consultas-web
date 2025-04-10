import InstanceAPI from "@/http/AxiosService";
import ControllerInterface from "@/http/ControllerInterface";

import type { AcordosLeniencia } from "@/types/AcordosLeniencia";

class Controller implements ControllerInterface {
  async AcordosLeniencia(): Promise<AcordosLeniencia> {
    return await InstanceAPI.get<AcordosLeniencia>("api/AcordosLeniencia").then(
      (response) => response.data
    );
  }
}

export default Controller;
