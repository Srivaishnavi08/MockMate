import { getCurrentUser } from "@/lib/actions/auth.action"
import Agent from "../../components/Agent"


const page = async () => {

  const user = await  getCurrentUser();
  return (
    
    <div>
      <h3>Interview</h3>
      <Agent userName={user?.name} userId={user?.id} type="generate"/>

    </div>
  )
}

export default page
