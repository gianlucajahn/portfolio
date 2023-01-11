import toast, { Toaster } from "react-hot-toast";

const copyEmail = () => {
    navigator.clipboard.writeText("gianluca.jahn98@gmail.com");
    toast('Copied E-Mail!', {
        icon: '📧',
        position: "top-left",
        style: {
            border: "1px solid #ebebeb",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
            borderRadius: "28px",
            fontFamily: "Inter",
            color: "#1d1d1f",
            fontSize: "14px"
        }
      });
}

export default copyEmail;