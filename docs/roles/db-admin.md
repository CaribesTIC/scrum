# Administrador de Base de Datos

>¿Quién es el Responsable de Gestionar las Bases de Datos?

## ¿Qué pasa con la integración continua de bases de datos?

Un buen punto para empezar a enfocar el tema es identificar responsabilidades. Es decir, ¿quién se encarga de las bases de datos en el equipo? Por ejemplo, ¿quién se encarga de este tema en un equipo Scrum? ¡Pero si una de las bases de un equipo Scrum es que sea multifuncional! (recuerda: los equipos modernos de desarrollo son multifuncionales, así disparan la velocidad y la productividad).

¿Pero qué grado de responsabilidad tiene cada rol? ¿Diferenciamos roles en el equipo cuando hablamos de bases de datos?

Por ejemplo, existen diferentes tipos de pruebas, distintos grados de pruebas y distintos roles. Los integrantes del equipo de pruebas pueden hacer pruebas funcionales, de carga etc. Pero las pruebas no solo es responsabilidad de este equipo, sino también los desarrolladores tienen que probar mientras programan, garantizando que su código funcione.

Entonces: en un equipo Scrum, ¿de quién es la responsabilidad de gestionar las bases de datos? ¿Y de evolucionar su diseño? ¿Debe haber algún rol específico en el equipo? ¿O no hace falta, mientras que el equipo sepa de ello?

Scrum se basa en un ciclo de vida iterativo e incremental, donde una de las cosas importantes es que vamos refinando y mejorando tanto el proceso Scrum en sí mismo (con las reuniones de retrospectivas, por ejemplo) y el producto (esa parte de ciclo de vida iterativo en la que también promovemos refactorizaciones y mejoras de calidad del código).

Si estamos de acuerdo en que con este enfoque el código debe ir mejorándose y refactorizándose, debemos tener una batería de pruebas automáticas que nos aseguren que la refactorización no ha roto nada, y que es necesario versionar integrando el código frecuentemente...¿Qué pasa con la base de datos? ¿Por qué tiene que ser más rígida? ¿Por qué no hacemos lo mismo? ¿Diseño iterativo de código + base de datos? ¿Por qué parece que tendemos a que el código vaya por un lado y la base de datos por otro? ¿Por qué solemos tener más miedo a evolucionarla? Y sobre todo...¿quién se va a encargar de ello?

Existen 3 enfoques diferentes para tratar esto, que han funcionado en diferentes organizaciones:

## 1. Las bases de datos las gestiona el DBA:

Un DBA (DataBase Administrator) típico, es una persona, o grupo de personas, responsables de tareas como la instalación, configuración, actualización, mantenimiento, administración y monitorización de las bases de datos de una organización. Aunque normalmente la cosa no se queda ahí. Normalmente un DBA es alguien que tiene una visión global de la base de datos. Cuando un desarrollador quiere modificar algo de la base de datos, deberá consultar y conseguir el consentimiento del DBA, ya que este rol es un experto en este tema. El DBA sabe cómo debería evolucionar la base de datos y cómo mantener un buen diseño y optimización. Pero la pregunta aquí es, ¿cabe este rol dentro de un equipo ágil? Personalmente no lo descartaría del todo, sobre todo en organismos que quieren adoptar un enfoque más ágil, pero tienen tradición de tener un rol de DBA. Es un rol especialista, útil, que sabe de un área en concreto. Lo que si es importante es cambiar el enfoque... hacia un rol de DBA más ágil.

- **1.1 Un DBA Ágil**: Para ciertas empresas, el rol de DBA es muy importante. Estas empresas son capaces de aplicar Scrum, teniendo un rol de DBA en cada equipo, o compartido entre varios equipos. Lo que si es cierto, es que este rol debe adaptarse desde un enfoque más típico hacia los valores ágiles. Igual que cambió el rol de pruebas, este rol también adquiere un nuevo enfoque. Lo más importante es que el DBA no está separado del resto del equipo. Al igual que otros perfiles, participa en las reuniones, en las estimaciones etc. Por otra parte hay que fomentar una muy buena comunicación entre todos los miembros del equipo y el DBA, solucionando posibles cuellos de botella. Y debe estar sentado con el resto del equipo. Otra cosa importante es que un DBA ágil no solo tiene el papel de administrador de base de datos; no solo monta bases de datos para distintos entornos, gestiona si alguna se ha caído, define estándares, modelado de datos etc. También se encarga de la parte “iterativa” de un proceso ágil, en este caso aplicado a la base de datos. Por ello, también debe saber temas de diseño evolutivo de bases de datos, refactoring de base de datos y es bueno que sepa temas de programación. Trabaja muy estrechamente con los desarrolladores. Los desarrolladores aprenden del DBA, y viceversa.

## 2. No existe DBA, sino que ciertas personas del equipo asumen ese rol:

Otro posible enfoque puede ser que no exista ese rol específico como tal dentro del equipo. En su lugar, ciertas personas del equipo dominan estos temas, y según sea necesario se irán incluyendo en los sprints tareas de refactorización, de mejora de la base de datos, de las que se encargan. Este enfoque también suele funcionar. Pero es muy importante acordar un procedimiento para tratar los cambios diarios de la base de datos, el versionado, la integración continua, para que todo marche perfectamente. En el caso anterior, entre otras cosas, el DBA se encargaba de estar pendiente del versionado y gestión de scripts y de controlar el estado de las bases de datos de los distintos entornos. En este caso, toda la responsabilidad de cara a las bases de datos es de todo el equipo.

## 3. El rol de DBA lo tiene la gente de sistemas:

La gente de sistemas puede encargarse perfectamente de optimizaciones, rendimiento, gestionar permisos, seguridad, montar bases de datos de distintos entornos, migrar datos etc. Pero normalmente, estos perfiles no suelen tender a gestionar la parte de refactoring y diseño evolutivo de la base de datos, cuya responsabilidad es de los desarrolladores. En este caso repartimos responsabilidades de rendimiento, gestión de entornos y demás para sistemas y el diseño evolutivo, versionado etc. vuelve a desarrollo.

## Confeciones de un DBA

>El desarrollo ágil de Base de Datos no sólo es posible, es una progresión natural.

Por mucho que cueste admitirlo, es difícil abandonar las viejas prácticas de desarrollo de bases de datos tradicionales. Por lo general, no nos hemos esforzado lo suficiente para aplicar este conocimiento a nuestras base de datos. El esquema del diseño tradicional y la estructura inflexible siguen siendo principalmente la regla. Se siente bien hacer un trabajo enorme de base de datos con la planificación por adelantado y montones de dibujos arquitectónicos y modelos de datos. ¿Es seguro, familiar y confortable?

>Hay algunos desafíos significativos al trasladarse hacia el desarrollo ágil de base de datos. La primera barrera: los administradores de bases de la vieja escuela. He estado trabajando con bases de datos desde hace casi 20 años. He sido responsable de la gestión, la administración y la arquitectura de una amplia gama de bases de datos empresariales. Con los años he desarrollado un fuerte sesgo y creencia. El jefe de la creencia era que “los desarrolladores eran malos”. Todos parecían tener deleite infantil en romper mis bases de datos. Fue una batalla constante para mantenerlos alejados. Hice grandes esfuerzos para crear bases de datos estructuradas, normalizadas y resistir el paso del tiempo. A pesar de todo, el verdadero problema era que mis bases de datos no pasaban la prueba del tiempo. A medida que las aplicaciones rápidamente van cambiado y evolucionado, las bases de datos no pudieron o fueron excepcionalmente difícil de refactorizar. Las bases de datos fueron obras maestras del diseño y la funcionalidad estática para un mundo volátil y cambiante. Me tomó un tiempo para entrar en razón, pero la aplicación de los principios ágiles para el desarrollo de bases de datos tiene mucho sentido.

## Todo el código es igual creado

Como muchas organizaciones de la industria se mueven hacia un modelo de prestación continua (lo que equivale a un cambio continuo) nuestros modelos de bases de datos deben ser diseñados para apoyar el cambio. Se necesita un cambio en la forma en que pensamos acerca de las bases de datos, pero no es un cambio difícil. Tenemos que empezar a pensar en las bases de datos del mismo modo que pensamos en el código de la aplicación, ya que realmente no hay diferencia intrínseca entre el código de la aplicación y las bases de datos.

## ¿De que se trata la agilidad en la base de datos?

Por extraño que parezca, las bases de datos ágiles se parecen mucho a las bases de datos tradicionales. Es el enfoque del desarrollo que cambia, junto con algunas tendencias históricamente arraigadas. En primer lugar, las bases de datos ágiles tienen mucho menos de diseño inicial. Es demasiado fácil pasar semanas, si no meses, en la creación de un diseño de base de datos que cubra todas las posibilidades concebibles. El principio YAGNI - “You aren’t gonna need it” (No lo vas a necesitar) - se aplica al diseño de la base de datos del mismo modo que se aplica al diseño de aplicaciones. El principio aplicado al desarrollo de bases de datos, simplemente significa que no debe generar objetos que no sabe si va a necesitar. Es decir, no construir objetos que no van a necesitar inmediatamente. Sin embargo, y esto es importante, según el principio KISS - “Keep it simple, stupid!” (¡Manténlo simple, estúpido!). De Scott Ambler en su ensayo sobre el modelado de datos ágil dice:

>"El hecho de que no queremos edificar demasiado, no significa que tenemos que ser estúpidos acerca de la forma en que vamos a modelar el esquema de datos. Podemos mirar hacia adelante un poco y organizar el esquema de base de manera que refleje el dominio y no sólo los requisitos específicos de la aplicación que actualmente estamos apoyando. Sin embargo, estamos haciendo esto de tal manera que no impacte el programa de aplicación y lo estamos haciendo de una manera colaborativa con los desarrolladores".

La conclusión es, no tratar de construir una base de datos para todas las edades, ya que tarde o temprano se producirá un error. Se debe construir lo que se necesita y lo que tiene sentido para el futuro inmediato, diseñar de tal manera que se pueda ampliar fácilmente, igual que lo haría el diseño del código. Aquí es donde la normalización es su amigo. Es mucho más fácil de extender y mantener las bases de datos si se normalizan. La adición de nuevas tablas o columnas a su diseño de forma iterativa para apoyar la evolución de las necesidades no debería ser tan doloroso como lo es a veces. Simplificando el diseño de su base de datos, así se reducirá automáticamente la cantidad de documentación necesaria. El código bien escrito debe ser auto-descriptivo, a su vez, las bases de datos bien diseñadas también deberían ser auto-descriptivas.

## La comunicación es la clave

Ya no es aceptable (si es que alguna vez lo fue) que el equipo de base de datos esté en un sitió separado del equipo de desarrollo. Hay que garantizar un flujo de comunicación transparente, constante e incesante del equipo de desarrollo con el administrador de la base de datos. Es, además, importante que os administradores de bases de  datos y los desarrolladores tengan una clara línea de comunicación y una buena relación de trabajo.

## Egos y viejos hábitos

Hablando desde la experiencia personal, los administradores de bases operativas de la vieja escuela muy a menudo consideran su dominio privado la base de su trabajo (con cierta razón). Insisten en guardar celosamente los cambios realizados que se llevan a cabo por ellos personalmente con poca o ninguna automatización, especialmente si la automatización fue escrito por un desarrollador. Hablando también desde la experiencia personal, estos administradores de bases necesitan superarlo. La automatización es la respuesta a una gran cantidad de desafíos de base de datos. Los procedimientos de implementación y de rollback automatizados bien escritos, bien probados son clave para lograr agilidad para el mundo de base de datos. No importa lo bueno que los administradores de bases de datos sean, siguen siendo humanos y los seres humanos cometen errores. Siempre es una mejor opción para diseñar una automatización fiable, probarla y depender de ella.

## Agilidad en el Diseño

Los aspectos técnicos del desarrollo de la base de datos ágil, al igual que en el desarrollo de aplicaciones, consiste en escribir y custodiar el buen código, así como las pruebas y la implementación del código. El código SQL (lenguaje de acceso a bases de datos) ágil está escrito de tal manera que promueve:

- **Repetibilidad**: El código debe ser escrito de modo que se pueda ejecutar varias veces en el mismo entorno sin fallar. Esto puede ser un reto, pero es completamente alcanzable.
- **Compatibilidad**: Las bases de datos deben ser siempre compatible con versiones anteriores, al menos, una de las versiones. Es igual de fácil deshacer un cambio de la aplicación (de producción) que deshacer un cambio de la base de datos (de producción). Las interfaces son sus amigos. Vistas, funciones y procedimientos pueden proporcionar interfaces que aíslan la aplicación de cambios en el esquema de base de datos.
- **Reversibilidad**: Los cambios en los objetos de programación SQL son la excepción a la regla de compatibilidad. Muy a menudo no se pueden modificar de una manera igual que la compatibilidad. En cambio, las secuencias de comandos de rollback se crean para devolver los objetos a su estado anterior.

## Toda la verdad

Es importante saber cuál es la verdad y es imprescindible que haya una sola versión de la verdad. Mantener el esquema de base de datos en el control de código fuente junto con su código de aplicación asociado nos permite saber dónde y cuál es la verdad para un lanzamiento en particular. Construir modificaciones directas al código de producción sin el proceso de control de versiones del código fuente es típicamente inaceptable. Lo mismo debería ser cierto para las modificaciones de bases de datos.

## Al bajarse de la plataforma improvisada

Hay mucho más que puede decirse sobre el diseño ágil de base de datos y hay un montón de cosas por ahí que pueden ser leídas. No pretendo presentar la idea de que la construcción de bases de datos con los principios ágiles sea fácil o sin ningún inconveniente. Lo que quiero firmemente, es presentar la idea de que a partir del diseño con los principios ágiles en mente reducirá significativamente la cantidad de tiempo que se necesita para crear un diseño de base de datos confiable, de buen rendimiento, flexible y extensible.
