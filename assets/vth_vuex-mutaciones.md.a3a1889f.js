import{_ as s,c as a,o as n,N as o}from"./chunks/framework.6a8e5212.js";const d=JSON.parse('{"title":"Vuex Mutaciones","description":"","frontmatter":{},"headers":[],"relativePath":"vth/vuex-mutaciones.md"}'),e={name:"vth/vuex-mutaciones.md"},l=o(`<h1 id="vuex-mutaciones" tabindex="-1">Vuex Mutaciones <a class="header-anchor" href="#vuex-mutaciones" aria-label="Permalink to &quot;Vuex Mutaciones&quot;">​</a></h1><h2 id="probando-mutaciones" tabindex="-1">Probando Mutaciones <a class="header-anchor" href="#probando-mutaciones" aria-label="Permalink to &quot;Probando Mutaciones&quot;">​</a></h2><p>Probar mutaciones de forma aislada es muy sencillo, porque las mutaciones son solo funciones regulares de JavaScript. Esta página analiza las pruebas de mutaciones de forma aislada. Si desea probar mutaciones en el contexto de un componente que comete una mutación, consulte <a href="./../vth/probando-vuex-en-componentes-mutaciones-y-acciones.html">aquí</a>.</p><p>La prueba utilizada en el siguiente ejemplo se puede encontrar <a href="https://github.com/lmiller1990/vue-testing-handbook/blob/master/demo-app/tests/unit/mutations.spec.js" target="_blank" rel="noreferrer">aquí</a>.</p><h2 id="creando-la-mutacion" tabindex="-1">Creando la Mutación <a class="header-anchor" href="#creando-la-mutacion" aria-label="Permalink to &quot;Creando la Mutación&quot;">​</a></h2><p>Las mutaciones tienden a seguir un patrón establecido. Obtenga algunos datos, tal vez haga algún procesamiento, luego asigne los datos al estado. Aquí está el esquema de una mutación <code>ADD_POST</code>. Una vez implementado, recibirá un objeto <code>post</code> en la carga útil y agregará <code>post.id</code> a <code>state.postIds</code>. También agregará el objeto de publicación al objeto <code>state.posts</code>, donde la clave es <code>post.id</code>. Este es un patrón común en las aplicaciones que usan Vuex.</p><p>Lo desarrollaremos usando TDD. El comienzo de la mutación es el siguiente:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// store/mutations.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">SET_POST</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">post</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Escribamos la prueba y dejemos que los mensajes de error guíen nuestro desarrollo:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> mutations </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/store/mutations.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SET_POST</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">it</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">adds a post to the state</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">post</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Post</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      postIds</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      posts</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">mutations</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SET_POST</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">post</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      postIds</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      posts</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">post</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Ejecutar esta prueba genera el siguiente mensaje de error:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FAIL  tests/unit/mutations.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;">● SET_POST › adds a post to the state</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  expect(received).toEqual(expected)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Expected value to equal:</span></span>
<span class="line"><span style="color:#A6ACCD;">    {&quot;postIds&quot;: [1], &quot;posts&quot;: {&quot;1&quot;: {&quot;id&quot;: 1, &quot;title&quot;: &quot;Post&quot;}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  Received:</span></span>
<span class="line"><span style="color:#A6ACCD;">    {&quot;postIds&quot;: [], &quot;posts&quot;: {}}</span></span></code></pre></div><p>Comencemos agregando <code>post.id</code> a <code>state.postIds</code>:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// store/mutations.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">SET_POST</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">post</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">postIds</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">post</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Ahora la prueba produce:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Expected value to equal:</span></span>
<span class="line"><span style="color:#A6ACCD;">  {&quot;postIds&quot;: [1], &quot;posts&quot;: {&quot;1&quot;: {&quot;id&quot;: 1, &quot;title&quot;: &quot;Post&quot;}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">Received:</span></span>
<span class="line"><span style="color:#A6ACCD;">  {&quot;postIds&quot;: [1], &quot;posts&quot;: {}}</span></span></code></pre></div><p><code>postIds</code> se ve bien. Ahora solo necesitamos agregar la publicación a <code>state.posts</code>. Debido a cómo funciona el sistema de reactividad de Vue, no podemos simplemente escribir <code>post[post.id] = post</code> para agregar la publicación. Más detalles se pueden encontrar <a href="https://vuejs.org/guide/extras/reactivity-in-depth.html" target="_blank" rel="noreferrer">aquí</a>. Básicamente, necesita crear un nuevo objeto usando <code>Object.assign</code> o el operador <code>...</code>. Usaremos el operador <code>...</code> para asignar la publicación a <code>state.posts</code>:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// store/mutations.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">SET_POST</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">post</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">postIds</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">post</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">posts</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">posts</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">post</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">post</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>¡Ahora pasa la prueba!</p><h2 id="conclusion" tabindex="-1">Conclusión <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusión&quot;">​</a></h2><p>Probar las mutaciones de Vuex no requiere nada específico de Vue o Vuex, ya que son solo funciones regulares de JavaScript. Simplemente impórtelos y pruébelos según sea necesario. Lo único que debe tener cuidado son las advertencias de reactividad de Vue, que también se aplican a Vuex. Puede leer más sobre el sistema de reactividad y las advertencias comunes <a href="https://vuejs.org/guide/extras/reactivity-in-depth.html" target="_blank" rel="noreferrer">aquí</a>.</p><p>La página discutida:</p><ul><li>Las mutaciones de Vuex son funciones regulares de JavaScript</li><li>Las mutaciones pueden, y deben, probarse de forma aislada de la aplicación principal de Vue</li></ul><p>La prueba utilizada en el ejemplo anterior se puede encontrar <a href="https://github.com/lmiller1990/vue-testing-handbook/blob/master/demo-app/tests/unit/mutations.spec.js" target="_blank" rel="noreferrer">aquí</a>.</p>`,24),p=[l];function t(c,r,i,y,F,D){return n(),a("div",null,p)}const C=s(e,[["render",t]]);export{d as __pageData,C as default};