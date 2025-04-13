import { Icon } from '@iconify/react';

interface ModalGenericProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
  open: boolean;
  close: () => void;
}

const ModalGeneric: React.FC<ModalGenericProps> = ({ children, title, open, close }) => {
  return (
    <div
      className={`relative z-10 ${open ? '' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal={open ? 'true' : 'false'}
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden={open ? 'true' : 'false'}
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white absolute top-2 right-2"
                data-modal-hide="default-modal"
                onClick={close}
              >
                <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                <span className="sr-only">Close modal</span>
              </button>

              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold text-gray-900 mb-4" id="modal-title">
                    {title}
                  </h3>

                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGeneric;
