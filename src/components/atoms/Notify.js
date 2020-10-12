import { toast } from 'react-toastify';

export const notify = (type) => {
  const toastObject = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  if (type === 'add') {
    toast.success('Note added!', {
      toastObject,
    });
  } else {
    toast.error('Something went wrong :<', {
      toastObject,
    });
  }
};
