import React, { Fragment, useState } from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { DialogActions, DialogContent, DialogTitle, Divider, ModalDialog } from '@mui/joy';
import { VscWarning } from "react-icons/vsc";
import { FaTrashAlt } from 'react-icons/fa';

const PopupModal = () => {
  const [open, setOpen] = useState(false);
  return (
    // <Fragment>
    //   <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
    //     Open modal
    //   </Button>
    //   <Modal
    //     aria-labelledby="modal-title"
    //     aria-describedby="modal-desc"
    //     open={open}
    //     onClose={() => setOpen(false)}
    //     sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    //   >
    //     <Sheet
    //       variant="outlined"
    //       sx={{
    //         maxWidth: 500,
    //         borderRadius: 'md',
    //         p: 3,
    //         boxShadow: 'lg',
    //       }}
    //     >
    //       <ModalClose variant="plain" sx={{ m: 1 }} />
    //       <Typography
    //         component="h2"
    //         id="modal-title"
    //         level="h4"
    //         textColor="inherit"
    //         fontWeight="lg"
    //         mb={1}
    //       >
    //         This is the modal title
    //       </Typography>
    //       <Typography id="modal-desc" textColor="text.tertiary">
    //         Make sure to use <code>aria-labelledby</code> on the modal dialog with an
    //         optional <code>aria-describedby</code> attribute.
    //       </Typography>
    //     </Sheet>
    //   </Modal>
    // </Fragment>

    <Fragment>
      <button
        className="remove-button"
        onClick={() => setOpen(true)}
      >
        <FaTrashAlt />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog" style={{ height: '28vh', width: '30vw' }}>
          <DialogTitle style={{ fontSize: '20px' }}>
            <VscWarning style={{ paddingTop: '3px', height: '20px', width: '20px' }} /> Xác nhận
          </DialogTitle>
          <Divider />
          <DialogContent sx={{ fontSize: '18px' }}>
            Bạn có chắc chắn xóa không?
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => setOpen(false)} style={{ fontSize: '20px' }}>
              Xóa bỏ
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)} style={{ fontSize: '20px' }}>
              Không
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}

export default PopupModal;