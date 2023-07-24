import { Application } from "@/components/application/Application"
import { Skills } from "../components/skills/Skills"
import { Counter } from "@/components/counter/Counter"
import { Users } from "@/components/users/Users"
import { CounterTwo } from "@/components/counter-two/CounterTwo"

const page = () => {
  return (
    <div className="cloumn text-justify">
      <Application />
      <Skills skills={['HTML', 'CSS']} />
      <Counter />
      <CounterTwo count={1} />
      <Users />
    </div>

  )
}

export default page