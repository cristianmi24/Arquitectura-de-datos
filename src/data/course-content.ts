import type { Module } from '@/types';
import { DatabaseIcon, SplitIcon, ShieldCheckIcon, BlocksIcon, WrenchIcon, TrendingUpIcon } from 'lucide-react';

export const courseModules: Module[] = [
  {
    id: "1",
    title: {
      en: "Fundamentals of Data Architecture",
      es: "Fundamentos de la Arquitectura de Datos",
    },
    description: {
      en: "Learn the basics of data architecture, its importance, and core components.",
      es: "Aprende los conceptos básicos de la arquitectura de datos, su importancia y componentes principales."
    },
    icon: DatabaseIcon,
    topics: [
      {
        id: "1-1",
        title: { en: "What is Data Architecture?", es: "¿Qué es la arquitectura de datos?" },
        content: {
          en: `Data Architecture is a set of rules, policies, standards, and models that govern and define the type of data collected and how it is used, stored, managed, and integrated within an organization and its database systems. It provides a formal approach to creating and managing data resources. 
          Key aspects include:
          - Data modeling: Defining data structures.
          - Data flow: How data moves through systems.
          - Data storage: Where and how data is kept.
          - Data governance: Ensuring data quality, security, and compliance.
          - Data integration: Combining data from different sources.
          A well-defined data architecture ensures that data is accurate, reliable, secure, and readily available to support business operations and decision-making.`,
          es: `La Arquitectura de Datos es un conjunto de reglas, políticas, estándares y modelos que gobiernan y definen el tipo de datos recopilados y cómo se utilizan, almacenan, gestionan e integran dentro de una organización y sus sistemas de bases de datos. Proporciona un enfoque formal para crear y gestionar los recursos de datos.
          Aspectos clave incluyen:
          - Modelado de datos: Definición de estructuras de datos.
          - Flujo de datos: Cómo se mueven los datos a través de los sistemas.
          - Almacenamiento de datos: Dónde y cómo se guardan los datos.
          - Gobernanza de datos: Asegurar la calidad, seguridad y cumplimiento de los datos.
          - Integración de datos: Combinar datos de diferentes fuentes.
          Una arquitectura de datos bien definida asegura que los datos sean precisos, confiables, seguros y estén fácilmente disponibles para respaldar las operaciones comerciales y la toma de decisiones.`
        },
      },
      {
        id: "1-2",
        title: { en: "Importance in Modern Systems", es: "Importancia en los sistemas modernos" },
        content: {
          en: `In today's data-driven world, data architecture is crucial for several reasons:
          - **Informed Decision-Making:** Provides reliable data for business intelligence and analytics.
          - **Operational Efficiency:** Streamlines data processes, reducing redundancy and improving performance.
          - **Regulatory Compliance:** Helps meet legal and regulatory requirements (e.g., GDPR, HIPAA).
          - **Scalability and Flexibility:** Enables systems to grow and adapt to changing business needs.
          - **Data Security:** Implements measures to protect sensitive data from unauthorized access and breaches.
          - **Improved Data Quality:** Ensures data is accurate, consistent, and trustworthy.
          Without a solid data architecture, organizations may struggle with data silos, poor data quality, security vulnerabilities, and an inability to leverage data as a strategic asset.`,
          es: `En el mundo actual impulsado por los datos, la arquitectura de datos es crucial por varias razones:
          - **Toma de Decisiones Informada:** Proporciona datos confiables para inteligencia de negocios y análisis.
          - **Eficiencia Operativa:** Optimiza los procesos de datos, reduciendo la redundancia y mejorando el rendimiento.
          - **Cumplimiento Normativo:** Ayuda a cumplir con los requisitos legales y regulatorios (por ejemplo, GDPR, HIPAA).
          - **Escalabilidad y Flexibilidad:** Permite que los sistemas crezcan y se adapten a las necesidades cambiantes del negocio.
          - **Seguridad de los Datos:** Implementa medidas para proteger los datos sensibles contra accesos no autorizados y brechas.
          - **Mejora de la Calidad de los Datos:** Asegura que los datos sean precisos, consistentes y confiables.
          Sin una arquitectura de datos sólida, las organizaciones pueden tener dificultades con silos de datos, baja calidad de datos, vulnerabilidades de seguridad e incapacidad para aprovechar los datos como un activo estratégico.`
        },
      },
      {
        id: "1-3",
        title: { en: "Basic Components", es: "Componentes básicos" },
        content: {
          en: `Key components of data architecture typically include:
          - **Data Sources:** Systems and applications where data originates (e.g., CRM, ERP, IoT devices).
          - **Data Storage:** Databases, data warehouses, data lakes where data is stored (e.g., relational databases, NoSQL databases, cloud storage).
          - **Data Integration:** Processes and tools for ETL (Extract, Transform, Load) or ELT, data pipelines, APIs.
          - **Data Governance Framework:** Policies, roles, responsibilities, and processes for managing data assets.
          - **Data Security Infrastructure:** Tools and practices for data encryption, access control, and threat detection.
          - **Metadata Management:** Systems for defining, storing, and managing metadata (data about data).
          - **Data Modeling Tools:** Software used to create conceptual, logical, and physical data models.
          - **Analytics and Reporting Tools:** Platforms for querying, visualizing, and analyzing data.`,
          es: `Los componentes clave de la arquitectura de datos suelen incluir:
          - **Fuentes de Datos:** Sistemas y aplicaciones donde se originan los datos (por ejemplo, CRM, ERP, dispositivos IoT).
          - **Almacenamiento de Datos:** Bases de datos, almacenes de datos (data warehouses), lagos de datos (data lakes) donde se almacenan los datos (por ejemplo, bases de datos relacionales, bases de datos NoSQL, almacenamiento en la nube).
          - **Integración de Datos:** Procesos y herramientas para ETL (Extraer, Transformar, Cargar) o ELT, canalizaciones de datos (data pipelines), APIs.
          - **Marco de Gobernanza de Datos:** Políticas, roles, responsabilidades y procesos para gestionar los activos de datos.
          - **Infraestructura de Seguridad de Datos:** Herramientas y prácticas para el cifrado de datos, control de acceso y detección de amenazas.
          - **Gestión de Metadatos:** Sistemas para definir, almacenar y gestionar metadatos (datos sobre los datos).
          - **Herramientas de Modelado de Datos:** Software utilizado para crear modelos de datos conceptuales, lógicos y físicos.
          - **Herramientas de Análisis e Informes:** Plataformas para consultar, visualizar y analizar datos.`
        },
      },
    ],
  },
  {
    id: "2",
    title: { en: "Data Models and Structures", es: "Modelos y Estructuras de Datos" },
    description: {
      en: "Explore various data models and how data is structured and stored.",
      es: "Explora varios modelos de datos y cómo se estructuran y almacenan los datos."
    },
    icon: SplitIcon,
    topics: [
      { id: "2-1", title: { en: "Hierarchical, Relational, OO Models", es: "Modelos jerárquicos, relacionales y OO" }, content: { en: "Content for Topic 2.1...", es: "Contenido para Tema 2.1..." } },
      { id: "2-2", title: { en: "Storage Structures", es: "Estructuras de almacenamiento" }, content: { en: "Content for Topic 2.2...", es: "Contenido para Tema 2.2..." } },
      { id: "2-3", title: { en: "Databases vs Data Warehouses", es: "Bases de datos vs almacenes de datos" }, content: { en: "Content for Topic 2.3...", es: "Contenido para Tema 2.3..." } },
    ],
  },
  {
    id: "3",
    title: { en: "Data Governance and Security", es: "Gobierno y Seguridad de los Datos" },
    description: {
      en: "Understand data governance policies, data quality, and security measures.",
      es: "Comprende las políticas de gobierno de datos, la calidad de los datos y las medidas de seguridad."
    },
    icon: ShieldCheckIcon,
    topics: [
      { id: "3-1", title: { en: "Policies and Standards", es: "Políticas y estándares" }, content: { en: "Content for Topic 3.1...", es: "Contenido para Tema 3.1..." } },
      { id: "3-2", title: { en: "Data Quality", es: "Calidad de datos" }, content: { en: "Content for Topic 3.2...", es: "Contenido para Tema 3.2..." } },
      { id: "3-3", title: { en: "Security and Privacy", es: "Seguridad y privacidad" }, content: { en: "Content for Topic 3.3...", es: "Contenido para Tema 3.3..." } },
    ],
  },
  {
    id: "4",
    title: { en: "Modern Architectures", es: "Arquitecturas Modernas" },
    description: {
      en: "Dive into SOA, Microservices, and Cloud-Based data architectures.",
      es: "Sumérgete en las arquitecturas de datos SOA, Microservicios y Basadas en la Nube."
    },
    icon: BlocksIcon,
    topics: [
      { id: "4-1", title: { en: "Service-Oriented Architecture (SOA)", es: "Arquitectura orientada a servicios (SOA)" }, content: { en: "Content for Topic 4.1...", es: "Contenido para Tema 4.1..." } },
      { id: "4-2", title: { en: "Microservices Architecture", es: "Arquitectura basada en microservicios" }, content: { en: "Content for Topic 4.2...", es: "Contenido para Tema 4.2..." } },
      { id: "4-3", title: { en: "Cloud-Based Architectures", es: "Arquitectura en la nube" }, content: { en: "Content for Topic 4.3...", es: "Contenido para Tema 4.3..." } },
    ],
  },
  {
    id: "5",
    title: { en: "Tools and Platforms", es: "Herramientas y Plataformas" },
    description: {
      en: "Discover tools for data modeling, integration, and visualization.",
      es: "Descubre herramientas para modelado de datos, integración y visualización."
    },
    icon: WrenchIcon,
    topics: [
      { id: "5-1", title: { en: "Data Modeling Tools", es: "Herramientas de modelado de datos" }, content: { en: "Content for Topic 5.1...", es: "Contenido para Tema 5.1..." } },
      { id: "5-2", title: { en: "Integration Platforms", es: "Plataformas de integración" }, content: { en: "Content for Topic 5.2...", es: "Contenido para Tema 5.2..." } },
      { id: "5-3", title: { en: "Data Visualization Platforms", es: "Plataformas de visualización" }, content: { en: "Content for Topic 5.3...", es: "Contenido para Tema 5.3..." } },
    ],
  },
  {
    id: "6",
    title: { en: "Trends and Future", es: "Tendencias y Futuro" },
    description: {
      en: "Explore Big Data, AI in data architecture, automation, and self-service.",
      es: "Explora Big Data, IA en la arquitectura de datos, automatización y autoservicio."
    },
    icon: TrendingUpIcon,
    topics: [
      { id: "6-1", title: { en: "Big Data & Scalable Architectures", es: "Big Data y arquitecturas escalables" }, content: { en: "Content for Topic 6.1...", es: "Contenido para Tema 6.1..." } },
      { id: "6-2", title: { en: "AI in Data Architecture", es: "Inteligencia Artificial en datos" }, content: { en: "Content for Topic 6.2...", es: "Contenido para Tema 6.2..." } },
      { id: "6-3", title: { en: "Automation and Self-Service", es: "Automatización y autoservicio" }, content: { en: "Content for Topic 6.3...", es: "Contenido para Tema 6.3..." } },
    ],
  },
];
