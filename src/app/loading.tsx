// =============================================================================
// PÁGINA DE CARGA - Module 4: Event Pass
// =============================================================================
// Loading UI que se muestra mientras las páginas cargan.
//
// ## loading.tsx
// Archivo especial de Next.js que crea un Suspense boundary automático.
// Se muestra mientras el Server Component está renderizando.
//
// ## React Suspense
// Next.js usa Suspense internamente para streaming de Server Components.
// loading.tsx es el fallback de ese Suspense.
// =============================================================================

/**
 * Componente interno de Skeleton.
 * Usa 'animate-pulse' para el efecto de parpadeo y 'bg-muted' para el color gris.
 */
function Skeleton({ className }: { className?: string }) {
  return (
    <div 
      className={`animate-pulse rounded-md bg-muted ${className}`} 
      style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
    />
  );
}

export default function LoadingMyEvents() {
  return (
    <div className="container mx-auto py-10">
      {/* Header Skeleton (Imita el título y el botón de Crear Evento) */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-9 w-48" /> {/* Título "Mis Eventos" */}
          <Skeleton className="h-5 w-64" /> {/* Subtítulo */}
        </div>
        <Skeleton className="h-10 w-32" />   {/* Botón de Crear */}
      </div>

      {/* Grid de Event Cards Skeletons (Imita 3 tarjetas cargando) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-xl border bg-card shadow-sm">
            {/* Imagen del evento */}
            <Skeleton className="h-[200px] w-full rounded-none" />
            
            {/* Contenido de la tarjeta */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" /> {/* Título del evento */}
                <Skeleton className="h-4 w-1/4" /> {/* Badge de categoría */}
              </div>
              
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full" /> {/* Ubicación */}
                <Skeleton className="h-4 w-5/6" /> {/* Fecha */}
              </div>
            </div>

            {/* Footer de la tarjeta */}
            <div className="flex items-center justify-between p-6 pt-0">
              <Skeleton className="h-6 w-16" /> {/* Precio */}
              <div className="flex gap-2">
                <Skeleton className="h-9 w-16" /> {/* Botón Editar */}
                <Skeleton className="h-9 w-20" /> {/* Botón Eliminar */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}