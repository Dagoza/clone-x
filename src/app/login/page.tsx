import { AuthButtonServer } from "../components/auth-buttons-server";

export default function Login() {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold text-center">Login CloneX</h1>
      <AuthButtonServer />
    </section>
  );
}
