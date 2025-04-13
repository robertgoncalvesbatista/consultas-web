import { useState } from 'react';

import CardBox from '../../components/shared/CardBox';
import ModalGeneric from '../../components/shared/ModalGeneric';
import Button from '../../components/shared/Button';

const SamplePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [row, setRow] = useState<number>(0);

  const data = [
    {
      numeroRegistro: 1,
      detalhamentoAcordo: {
        dataInicioAcordo: 'string',
        dataFimAcordo: 'string',
        orgaoResponsavel: 'string',
        situacaoAcordo: 'string',
      },
      sancoes: [
        {
          cnpj: '0032049',
          razaoSocial: 'sfsdf',
          nomeFantasia: 'strhghrtevng',
        },
        {
          cnpj: 'string',
          razaoSocial: 'string',
          nomeFantasia: 'string',
        },
      ],
      quantidade: 0,
    },
    {
      numeroRegistro: 2,
      detalhamentoAcordo: {
        dataInicioAcordo: 'string',
        dataFimAcordo: 'string',
        orgaoResponsavel: 'string',
        situacaoAcordo: 'string',
      },
      sancoes: [
        {
          cnpj: 'string',
          razaoSocial: 'string',
          nomeFantasia: 'string',
        },
      ],
      quantidade: 0,
    },
    {
      numeroRegistro: 3,
      detalhamentoAcordo: {
        dataInicioAcordo: 'string',
        dataFimAcordo: 'string',
        orgaoResponsavel: 'string',
        situacaoAcordo: 'string',
      },
      sancoes: [],
      quantidade: 0,
    },
  ];

  return (
    <>
      <CardBox>
        <h5 className="card-title">Acordo de Leniência</h5>
      </CardBox>

      <CardBox className="mt-6">
        <ul role="list" className="divide-y divide-gray-100">
          {data.map((item, index) => {
            return (
              <li className="py-5">
                <div className="grid grid-cols-12 gap-30">
                  <div className="lg:col-span-4 col-span-12">
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-md text-gray-900 dark:text-white font-bold">
                          Número de registro
                        </span>
                        <p className="text-xs text-gray-900 dark:text-white mt-1">
                          {item.numeroRegistro}
                        </p>
                      </div>

                      <div>
                        <span className="text-md text-gray-900 dark:text-white font-bold">
                          Orgão do responsável
                        </span>
                        <p className="text-xs text-gray-900 dark:text-white mt-1">
                          {item.detalhamentoAcordo.orgaoResponsavel}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 col-span-12">
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-md text-gray-900 dark:text-white font-bold">
                          Status
                        </span>
                        <p className="text-xs text-gray-900 dark:text-white">
                          {item.detalhamentoAcordo.situacaoAcordo}
                        </p>
                      </div>

                      <div>
                        <span className="text-md text-gray-900 dark:text-white font-bold">
                          Data de início do acordo
                        </span>
                        <p className="text-xs text-gray-900 dark:text-white mt-1">
                          {item.detalhamentoAcordo.dataInicioAcordo}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 col-span-12">
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-md text-gray-900 dark:text-white font-bold">
                          Quantidade
                        </span>
                        <p className="text-xs text-gray-900 dark:text-white">{item.quantidade}</p>
                      </div>

                      <div>
                        <span className="text-md text-gray-900 dark:text-white font-bold">
                          Data de fim do acordo
                        </span>
                        <p className="text-xs text-gray-900 dark:text-white mt-1">
                          {item.detalhamentoAcordo.dataFimAcordo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setRow(index);
                    setOpenModal(true);
                  }}
                  className="mt-4"
                >
                  Ver sanções
                </Button>
              </li>
            );
          })}
        </ul>
      </CardBox>

      <ModalGeneric title="Sanções" open={openModal} close={() => setOpenModal(false)}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Razão social
              </th>
              <th scope="col" className="px-6 py-3">
                Nome fantasia
              </th>
              <th scope="col" className="px-6 py-3">
                CNPJ
              </th>
            </tr>
          </thead>

          <tbody>
            {data[row].sancoes.length === 0 && (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                Não há sanções
              </tr>
            )}

            {data[row].sancoes.map((sancao) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {sancao.razaoSocial}
                  </th>
                  <td className="px-6 py-4">{sancao.nomeFantasia}</td>
                  <td className="px-6 py-4">{sancao.cnpj}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ModalGeneric>
    </>
  );
};

export default SamplePage;
