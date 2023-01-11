import toast, { Toaster } from "react-hot-toast";

const copyURL = () => {
    navigator.clipboard.writeText("https://gianluca-jahn.de");
    toast('Copied URL!', {
        icon: '🌐',
        position: "top-left",
        style: {
            border: "1px solid #ebebeb",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)"
        }
      });
}

export default copyURL;