# 🎟️ Módulo 5 - Event Pass Pro (Auth & AI Edition)

**Full-Stack App con Next.js App Router, React 19, Firebase y Gemini AI**

Plataforma moderna para el descubrimiento, creación y registro de eventos. Este proyecto aprovecha los paradigmas más recientes de la web, utilizando **Server Components** para renderizado eficiente, **Server Actions** para mutaciones seguras y **Inteligencia Artificial** para potenciar la creación de contenido.

---

## 💻 Stack Tecnológico

Arquitectura monolítica moderna (Full-Stack unificado) con Next.js y persistencia en Firebase.

| Dependencia   | Versión | Propósito |
|--------------|--------|----------|
| Next.js      | 15.x   | Framework React Full-Stack (App Router) |
| React        | 19.x   | Biblioteca UI (Server Actions + nuevos hooks) |
| TypeScript   | 5.x    | Tipado estático |
| Tailwind CSS | 4.x    | Estilos utilitarios |
| Firebase     | 11.x   | Autenticación y base de datos (Firestore) |
| Google Gemini| 2.0    | IA generativa para contenido |
| Zod          | 3.x    | Validación en servidor |
| Lucide React | 0.x    | Iconografía |

---

## 🧠 Conceptos Clave Implementados

- **React Server Components (RSC):**  
  Acceso directo a Firebase desde el servidor sin enviar JS innecesario al cliente.

- **Server Actions (`'use server'`):**  
  Sustituyen endpoints REST, validando autenticación y permisos antes de cada operación.

- **Rutas Protegidas (Route Guards):**  
  Redirecciones automáticas basadas en cookies de autenticación.

- **Prompt Engineering (IA):**  
  Generación de respuestas estructuradas en JSON usando Gemini.

---

## 🏗️ Arquitectura de la Aplicación

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ARQUITECTURA NEXT.JS + FIREBASE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│    ┌─────────────────────┐         ┌─────────────────────┐                  │
│    │    CLIENT (Browser) │         │   SERVER (Next.js)  │                  │
│    │                     │         │                     │                  │
│    │  ┌───────────────┐  │         │  ┌───────────────┐  │                  │
│    │  │ UI Components │  │ HTTP POST  │ Server Actions│  │                  │
│    │  │ (Forms, AI)   │ ├───────────►│ + Auth Guard   │  │                  │
│    │  └──────┬────────┘  │         │  └───────┬───────┘  │                  │
│    │         │           │         │          │          │                  │
│    │         ▼           │         │          ▼          │                  │
│    │  ┌───────────────┐  │         │  ┌───────────────┐  │                  │
│    │  │ Firebase SDK  │◄─┼─────────┤  │ Admin SDK     │  │                  │
│    │  │ (Auth Client) │  │  Render │  │ (Firestore)   │  │                  │
│    │  └───────────────┘  │         │  └───────────────┘  │                  │
│    └─────────────────────┘         └─────────────────────┘                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 20.19+ o 22.12+
- npm 10+
- Credenciales de Firebase
- API Key de Google Gemini

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno (.env.local)
# GEMINI_API_KEY=...
# FIREBASE_...

# 3. Iniciar servidor (puerto 3000)
npm run dev
```

---

## 📂 Estructura del Proyecto

```text
module5-event-pass/
├── src/
│   ├── app/
│   │   ├── my-events/
│   │   │   └── page.tsx
│   │   └── events/
│   ├── actions/
│   │   ├── eventActions.ts
│   │   └── aiActions.ts
│   ├── components/
│   │   ├── EventCard.tsx
│   │   └── EventForm.tsx
│   ├── lib/
│   │   ├── firebase/
│   │   └── gemini.ts
└── README.md
```

---

## 📄 Parte 1: My Events Dashboard (Mis Eventos)

### Contexto
Los usuarios autenticados requieren un espacio privado para gestionar sus eventos (editar/eliminar).

### Implementación Realizada

- **Ruta Protegida (Route Guard):**  
  El servidor valida el token de Firebase; si no existe sesión, redirige a `/auth`.

- **Filtro de Propiedad:**  
  Solo se muestran eventos donde `organizerId` coincide con el UID del usuario.

- **Autorización en Backend:**  
  Las Server Actions verifican propiedad antes de permitir editar o eliminar.

- **CRUD en la UI:**  
  `EventCard` renderiza botones de edición y eliminación solo para el dueño.

- **Estados de UX:**  
  - Empty State con CTA cuando no hay eventos  
  - Loading Skeletons durante carga  

---

## 📄 Parte 2: Enhanced AI Generation (IA Mejorada)

### Contexto
El generador de descripciones necesitaba mayor control, estructura y personalización.

### Implementación Realizada

- **Salida Estructurada (JSON):**  
  Gemini devuelve exactamente 3 variantes de descripción.

- **Selección de Tono:**  
  Se agregó selector: Formal, Casual y Emocionante.

- **UI Interactiva:**  
  Tarjetas con previews de cada variante generada.

- **Aplicación Directa:**  
  La opción seleccionada rellena automáticamente el formulario.

- **Feedback y Errores:**  
  - Spinner "Generando..."  
  - Botón "Regenerar"  
  - Manejo de errores de API  

---
Link al video explicativo: 
