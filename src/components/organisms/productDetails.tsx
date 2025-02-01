import {
  Box,
  Typography,
  Modal,
  Button,
  IconButton,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { IProduct } from "../../types/products";

const ModalContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  background: "#fff",
  padding: "2rem",
  borderRadius: "10px",
  color: "#000",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
});

const ProductDetailsModal = ({
  product,
  open,
  handleClose,
}: {
  product: IProduct;
  open: boolean;
  handleClose: () => void;
}) => (
  <Modal open={open} onClose={handleClose}>
    <ModalContent>
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        {product.title}
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", mb: 2 }}
      />
      <Typography variant="body1" sx={{ textAlign: "justify", mb: 2 }}>
        {product.description}
      </Typography>
      <Typography variant="h6" fontWeight="bold">
        Price: ${product.price}
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleClose}
      >
        Close
      </Button>
    </ModalContent>
  </Modal>
);

export default ProductDetailsModal;
