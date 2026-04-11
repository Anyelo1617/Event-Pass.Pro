import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { adminAuth } from '../../lib/firebase/admin';
import { getEvents } from '../../data/events';
import { EventCard } from '../../components/EventCard';
import { Button } from '../../components/ui/button';
import type { Event } from '../../types/event';

export default async function MyEventsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('firebase-auth-token')?.value;

  if(!token){
    redirect('/auth');
  }

  let uid = '';
  try{
    const decodedToken = await adminAuth.verifyIdToken(token);
    uid = decodedToken.uid;
  } 
  catch (error) {
    redirect('/auth');
  }

  const allEvents = await getEvents();
  const myEvents = allEvents.filter((event: Event) => event.organizerId === uid);

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mis Eventos</h1>
          <p className="text-muted-foreground">
            Gestiona los eventos que has creado.
          </p>
        </div>
        <Button asChild>
          <Link href="/events/new" className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Crear Evento
          </Link>
        </Button>
      </div>

      {myEvents.length === 0 ? (
        <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-lg border border-dashed text-center">
          <h3 className="mb-2 text-lg font-semibold">Aún no tienes eventos</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Crea tu primer evento para empezar a gestionar asistentes.
          </p>
          <Button asChild>
            <Link href="/events/new">Empezar ahora</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {myEvents.map((event: Event) => (
            <EventCard key={event.id} event={event} currentUserId={uid} />
          ))}
        </div>
      )}
    </div>
  );
}