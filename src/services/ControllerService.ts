import AxiosService from '../services/AxiosService';
import type { AcordosLeniencia } from '../types/AcordosLeniencia';

import ControllerServiceInterface from './ControllerServiceInterface';

class Controller implements ControllerServiceInterface {
  async AcordosLeniencia(): Promise<AcordosLeniencia> {
    return await AxiosService.get<AcordosLeniencia>('api/AcordosLeniencia').then(
      (response) => response.data,
    );
  }
}

export default Controller;
