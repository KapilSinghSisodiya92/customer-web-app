export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Customer Web App</h1>
      <ul className="list-disc pl-6">
        <li><a className="text-blue-600" href="/login">Login</a></li>
        <li><a className="text-blue-600" href="/signup">Signup</a></li>
        <li><a className="text-blue-600" href="/book">Book Appointment</a></li>
      </ul>
    </div>
  );
}