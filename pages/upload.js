import Progressbar from "@components/Progressbar";
import ProtectedRoute from "@components/ProtectedRoute";
import Uploader from "@components/Uploader";
import { HOME_LAYOUT_DATA } from "@layouts/Home";
import Lay1 from "@layouts/Lay1";

export default function Upload(){
 return (
  <Lay1 {...HOME_LAYOUT_DATA}>
   <ProtectedRoute>
   <Uploader />
   </ProtectedRoute>
  </Lay1>
 )
}