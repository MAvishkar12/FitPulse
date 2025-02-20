import { Stack } from "@mui/material"
import { ClipLoader } from "react-spinners";
function Loader() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <ClipLoader color="red"  size={70}></ClipLoader>

    </Stack>
  )
}

export default Loader
