import { auth,currentUser } from "@clerk/nextjs/server"

export default async function DashboardPage() {
  const authObj =  await auth();
  const userObj=  await currentUser();

  return (
    <div>DashboardPage</div>
  )
}
