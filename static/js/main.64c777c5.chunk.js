(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(a,s,n){},12:function(a,s,n){"use strict";n.r(s);var p,c=n(0),e=n.n(c),l=n(3),t=(n(10),n(1));!function(a){a.ts="TypeScript",a.purs="PureScript"}(p||(p={}));var o=function(a){var s=Object.keys(a.ts),n=s.some(function(a){return"sequence"===a})?"sequence":s[0],l=Object(c.useState)(p.ts),o=Object(t.a)(l,2),d=o[0],r=o[1],i=Object(c.useState)(n),b=Object(t.a)(i,2),u=b[0],m=b[1];return e.a.createElement("div",{className:"CodeBlock"},e.a.createElement("div",{className:"buttons"},e.a.createElement("div",{className:"language"},["ts","purs"].map(function(a){return e.a.createElement("button",{key:a,className:("ts"===a?d===p.ts:d===p.purs)?"active":"",onClick:function(){return r("ts"===a?p.ts:p.purs)}},"ts"===a?p.ts:p.purs)})),s.length>1&&e.a.createElement("div",{className:"syntax"},s.map(function(a){return e.a.createElement("button",{className:u===a?"active":"",key:a,onClick:function(){return m(a)}},a)}))),e.a.createElement("div",{className:"code",dangerouslySetInnerHTML:{__html:a[d===p.ts?"ts":"purs"][u]}}))},d='<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">type</span> Person <span class="op">=</span> <span class="op">{</span></span><span id="cb1-2"><a href="#cb1-2"></a>  id<span class="op">:</span> <span class="dt">number</span></span><span id="cb1-3"><a href="#cb1-3"></a>  name<span class="op">:</span> <span class="dt">string</span></span><span id="cb1-4"><a href="#cb1-4"></a>  city<span class="op">:</span> <span class="dt">string</span></span><span id="cb1-5"><a href="#cb1-5"></a><span class="op">}</span></span><span id="cb1-6"><a href="#cb1-6"></a></span><span id="cb1-7"><a href="#cb1-7"></a><span class="kw">const</span> nameById<span class="op">:</span> Record<span class="op">&lt;</span><span class="dt">number</span><span class="op">,</span> <span class="dt">string</span><span class="op">&gt;</span> <span class="op">=</span> <span class="op">{</span></span><span id="cb1-8"><a href="#cb1-8"></a>  <span class="dv">1</span><span class="op">:</span> <span class="st">&quot;Alice&quot;</span><span class="op">,</span></span><span id="cb1-9"><a href="#cb1-9"></a>  <span class="dv">2</span><span class="op">:</span> <span class="st">&quot;Bob&quot;</span><span class="op">,</span></span><span id="cb1-10"><a href="#cb1-10"></a>  <span class="dv">3</span><span class="op">:</span> <span class="st">&quot;Carol&quot;</span><span class="op">,</span></span><span id="cb1-11"><a href="#cb1-11"></a>  <span class="dv">4</span><span class="op">:</span> <span class="st">&quot;Dave&quot;</span><span class="op">,</span></span><span id="cb1-12"><a href="#cb1-12"></a><span class="op">}</span></span><span id="cb1-13"><a href="#cb1-13"></a></span><span id="cb1-14"><a href="#cb1-14"></a><span class="kw">const</span> cityById<span class="op">:</span> Record<span class="op">&lt;</span><span class="dt">number</span><span class="op">,</span> <span class="dt">string</span><span class="op">&gt;</span> <span class="op">=</span> <span class="op">{</span></span><span id="cb1-15"><a href="#cb1-15"></a>  <span class="dv">1</span><span class="op">:</span> <span class="st">&quot;Boston&quot;</span><span class="op">,</span></span><span id="cb1-16"><a href="#cb1-16"></a>  <span class="dv">2</span><span class="op">:</span> <span class="st">&quot;Chicago&quot;</span><span class="op">,</span></span><span id="cb1-17"><a href="#cb1-17"></a>  <span class="dv">3</span><span class="op">:</span> <span class="st">&quot;Miami&quot;</span><span class="op">,</span></span><span id="cb1-18"><a href="#cb1-18"></a><span class="op">}</span></span></code></pre></div> ',r='<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">type</span> <span class="dt">Person</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="ot">=</span> {<span class="ot"> id ::</span> <span class="dt">Int</span></span><span id="cb1-3"><a href="#cb1-3"></a>    ,<span class="ot"> name ::</span> <span class="dt">String</span></span><span id="cb1-4"><a href="#cb1-4"></a>    ,<span class="ot"> city ::</span> <span class="dt">String</span></span><span id="cb1-5"><a href="#cb1-5"></a>    }</span><span id="cb1-6"><a href="#cb1-6"></a></span><span id="cb1-7"><a href="#cb1-7"></a><span class="ot">nameById ::</span> <span class="dt">Map</span> <span class="dt">Int</span> <span class="dt">String</span></span><span id="cb1-8"><a href="#cb1-8"></a>nameById <span class="ot">=</span></span><span id="cb1-9"><a href="#cb1-9"></a>  Map.fromFoldable</span><span id="cb1-10"><a href="#cb1-10"></a>    [ <span class="dv">1</span> <span class="op">/\\</span> <span class="st">&quot;Alice&quot;</span></span><span id="cb1-11"><a href="#cb1-11"></a>    , <span class="dv">2</span> <span class="op">/\\</span> <span class="st">&quot;Bob&quot;</span></span><span id="cb1-12"><a href="#cb1-12"></a>    , <span class="dv">3</span> <span class="op">/\\</span> <span class="st">&quot;Carol&quot;</span></span><span id="cb1-13"><a href="#cb1-13"></a>    , <span class="dv">4</span> <span class="op">/\\</span> <span class="st">&quot;Dave&quot;</span></span><span id="cb1-14"><a href="#cb1-14"></a>    ]</span><span id="cb1-15"><a href="#cb1-15"></a></span><span id="cb1-16"><a href="#cb1-16"></a><span class="ot">cityById ::</span> <span class="dt">Map</span> <span class="dt">Int</span> <span class="dt">String</span></span><span id="cb1-17"><a href="#cb1-17"></a>cityById <span class="ot">=</span></span><span id="cb1-18"><a href="#cb1-18"></a>  Map.fromFoldable</span><span id="cb1-19"><a href="#cb1-19"></a>    [ <span class="dv">1</span> <span class="op">/\\</span> <span class="st">&quot;Boston&quot;</span></span><span id="cb1-20"><a href="#cb1-20"></a>    , <span class="dv">2</span> <span class="op">/\\</span> <span class="st">&quot;Chicago&quot;</span></span><span id="cb1-21"><a href="#cb1-21"></a>    , <span class="dv">3</span> <span class="op">/\\</span> <span class="st">&quot;Miami&quot;</span></span><span id="cb1-22"><a href="#cb1-22"></a>    ]</span></code></pre></div> ',i='<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">enum</span> City <span class="op">{</span></span><span id="cb1-2"><a href="#cb1-2"></a>  BOS <span class="op">=</span> <span class="st">&quot;BOS&quot;</span><span class="op">,</span></span><span id="cb1-3"><a href="#cb1-3"></a>  CHI <span class="op">=</span> <span class="st">&quot;CHI&quot;</span><span class="op">,</span></span><span id="cb1-4"><a href="#cb1-4"></a>  MIA <span class="op">=</span> <span class="st">&quot;MIA&quot;</span><span class="op">,</span></span><span id="cb1-5"><a href="#cb1-5"></a><span class="op">}</span></span><span id="cb1-6"><a href="#cb1-6"></a></span><span id="cb1-7"><a href="#cb1-7"></a><span class="kw">const</span> nameAndCityIdByNameId<span class="op">:</span> Record<span class="op">&lt;</span><span class="dt">number</span><span class="op">,</span> <span class="op">{</span> name<span class="op">:</span> <span class="dt">string</span><span class="op">;</span> cityId<span class="op">:</span> City <span class="op">}&gt;</span> <span class="op">=</span> <span class="op">{</span></span><span id="cb1-8"><a href="#cb1-8"></a>  <span class="dv">1</span><span class="op">:</span> <span class="op">{</span> name<span class="op">:</span> <span class="st">&quot;Alice&quot;</span><span class="op">,</span> cityId<span class="op">:</span> <span class="va">City</span><span class="op">.</span><span class="at">BOS</span> <span class="op">},</span></span><span id="cb1-9"><a href="#cb1-9"></a>  <span class="dv">2</span><span class="op">:</span> <span class="op">{</span> name<span class="op">:</span> <span class="st">&quot;Bob&quot;</span><span class="op">,</span> cityId<span class="op">:</span> <span class="va">City</span><span class="op">.</span><span class="at">MIA</span> <span class="op">},</span></span><span id="cb1-10"><a href="#cb1-10"></a>  <span class="dv">3</span><span class="op">:</span> <span class="op">{</span> name<span class="op">:</span> <span class="st">&quot;Carol&quot;</span><span class="op">,</span> cityId<span class="op">:</span> <span class="va">City</span><span class="op">.</span><span class="at">CHI</span> <span class="op">},</span></span><span id="cb1-11"><a href="#cb1-11"></a>  <span class="dv">4</span><span class="op">:</span> <span class="op">{</span> name<span class="op">:</span> <span class="st">&quot;Dave&quot;</span><span class="op">,</span> cityId<span class="op">:</span> <span class="va">City</span><span class="op">.</span><span class="at">BOS</span> <span class="op">},</span></span><span id="cb1-12"><a href="#cb1-12"></a><span class="op">}</span></span><span id="cb1-13"><a href="#cb1-13"></a></span><span id="cb1-14"><a href="#cb1-14"></a><span class="kw">const</span> cityNameById<span class="op">:</span> Record<span class="op">&lt;</span>City<span class="op">,</span> <span class="dt">string</span><span class="op">&gt;</span> <span class="op">=</span> <span class="op">{</span></span><span id="cb1-15"><a href="#cb1-15"></a>  <span class="op">[</span><span class="va">City</span><span class="op">.</span><span class="at">BOS</span><span class="op">]:</span> <span class="st">&quot;Boston&quot;</span><span class="op">,</span></span><span id="cb1-16"><a href="#cb1-16"></a>  <span class="op">[</span><span class="va">City</span><span class="op">.</span><span class="at">CHI</span><span class="op">]:</span> <span class="st">&quot;Chicago&quot;</span><span class="op">,</span></span><span id="cb1-17"><a href="#cb1-17"></a>  <span class="op">[</span><span class="va">City</span><span class="op">.</span><span class="at">MIA</span><span class="op">]:</span> <span class="st">&quot;Miami&quot;</span><span class="op">,</span></span><span id="cb1-18"><a href="#cb1-18"></a><span class="op">}</span></span></code></pre></div> ',b='<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">data</span> <span class="dt">City</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="ot">=</span> <span class="dt">BOS</span></span><span id="cb1-3"><a href="#cb1-3"></a>  <span class="op">|</span> <span class="dt">MIA</span></span><span id="cb1-4"><a href="#cb1-4"></a>  <span class="op">|</span> <span class="dt">CHI</span></span><span id="cb1-5"><a href="#cb1-5"></a></span><span id="cb1-6"><a href="#cb1-6"></a>derive <span class="kw">instance</span><span class="ot"> eqCity ::</span> <span class="dt">Eq</span> <span class="dt">City</span></span><span id="cb1-7"><a href="#cb1-7"></a>derive <span class="kw">instance</span><span class="ot"> ordCity ::</span> <span class="dt">Ord</span> <span class="dt">City</span></span><span id="cb1-8"><a href="#cb1-8"></a></span><span id="cb1-9"><a href="#cb1-9"></a><span class="ot">nameAndCityIdByNameId ::</span> <span class="dt">Map</span> <span class="dt">Int</span> {<span class="ot"> name ::</span> <span class="dt">String</span>,<span class="ot"> cityId ::</span> <span class="dt">City</span> }</span><span id="cb1-10"><a href="#cb1-10"></a>nameAndCityIdByNameId <span class="ot">=</span></span><span id="cb1-11"><a href="#cb1-11"></a>  Map.fromFoldable</span><span id="cb1-12"><a href="#cb1-12"></a>    [ <span class="dv">1</span> <span class="op">/\\</span> { name<span class="op">:</span> <span class="st">&quot;Alice&quot;</span>, cityId<span class="op">:</span> <span class="dt">BOS</span> }</span><span id="cb1-13"><a href="#cb1-13"></a>    , <span class="dv">2</span> <span class="op">/\\</span> { name<span class="op">:</span> <span class="st">&quot;Bob&quot;</span>, cityId<span class="op">:</span> <span class="dt">MIA</span> }</span><span id="cb1-14"><a href="#cb1-14"></a>    , <span class="dv">3</span> <span class="op">/\\</span> { name<span class="op">:</span> <span class="st">&quot;Carol&quot;</span>, cityId<span class="op">:</span> <span class="dt">CHI</span> }</span><span id="cb1-15"><a href="#cb1-15"></a>    , <span class="dv">4</span> <span class="op">/\\</span> { name<span class="op">:</span> <span class="st">&quot;Dave&quot;</span>, cityId<span class="op">:</span> <span class="dt">BOS</span> }</span><span id="cb1-16"><a href="#cb1-16"></a>    ]</span><span id="cb1-17"><a href="#cb1-17"></a></span><span id="cb1-18"><a href="#cb1-18"></a><span class="ot">cityNameById ::</span> <span class="dt">Map</span> <span class="dt">City</span> <span class="dt">String</span></span><span id="cb1-19"><a href="#cb1-19"></a>cityNameById <span class="ot">=</span></span><span id="cb1-20"><a href="#cb1-20"></a>  Map.fromFoldable</span><span id="cb1-21"><a href="#cb1-21"></a>    [ <span class="dt">BOS</span> <span class="op">/\\</span> <span class="st">&quot;Boston&quot;</span></span><span id="cb1-22"><a href="#cb1-22"></a>    , <span class="dt">CHI</span> <span class="op">/\\</span> <span class="st">&quot;Chicago&quot;</span></span><span id="cb1-23"><a href="#cb1-23"></a>    , <span class="dt">MIA</span> <span class="op">/\\</span> <span class="st">&quot;Miami&quot;</span></span><span id="cb1-24"><a href="#cb1-24"></a>    ]</span></code></pre></div> ',u={ap:'<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">const</span> personFromId <span class="op">=</span> (id<span class="op">:</span> <span class="dt">number</span>)<span class="op">:</span> Option<span class="op">&lt;</span>Person<span class="op">&gt;</span> <span class="kw">=&gt;</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="fu">pipe</span>(</span><span id="cb1-3"><a href="#cb1-3"></a>    (name<span class="op">:</span> <span class="dt">string</span>) <span class="kw">=&gt;</span> (city<span class="op">:</span> <span class="dt">string</span>) <span class="kw">=&gt;</span> (<span class="op">{</span> id<span class="op">,</span> name<span class="op">,</span> city <span class="op">}</span>)<span class="op">,</span></span><span id="cb1-4"><a href="#cb1-4"></a>    f <span class="kw">=&gt;</span> <span class="va">option</span><span class="op">.</span><span class="fu">map</span>(<span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> nameById)<span class="op">,</span> f)<span class="op">,</span></span><span id="cb1-5"><a href="#cb1-5"></a>    g <span class="kw">=&gt;</span> <span class="va">option</span><span class="op">.</span><span class="fu">ap</span>(g<span class="op">,</span> <span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> cityById))</span><span id="cb1-6"><a href="#cb1-6"></a>  )</span></code></pre></div> ',chain:'<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">const</span> personFromId <span class="op">=</span> (id<span class="op">:</span> <span class="dt">number</span>)<span class="op">:</span> Option<span class="op">&lt;</span>Person<span class="op">&gt;</span> <span class="kw">=&gt;</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="fu">pipe</span>(<span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> nameById)<span class="op">,</span> nameOption <span class="kw">=&gt;</span></span><span id="cb1-3"><a href="#cb1-3"></a>    <span class="va">option</span><span class="op">.</span><span class="fu">chain</span>(nameOption<span class="op">,</span> name <span class="kw">=&gt;</span></span><span id="cb1-4"><a href="#cb1-4"></a>      <span class="fu">pipe</span>(<span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> cityById)<span class="op">,</span> cityOption <span class="kw">=&gt;</span></span><span id="cb1-5"><a href="#cb1-5"></a>        <span class="va">option</span><span class="op">.</span><span class="fu">map</span>(cityOption<span class="op">,</span> city <span class="kw">=&gt;</span> (<span class="op">{</span></span><span id="cb1-6"><a href="#cb1-6"></a>          id<span class="op">,</span></span><span id="cb1-7"><a href="#cb1-7"></a>          name<span class="op">,</span></span><span id="cb1-8"><a href="#cb1-8"></a>          city<span class="op">,</span></span><span id="cb1-9"><a href="#cb1-9"></a>        <span class="op">}</span>))</span><span id="cb1-10"><a href="#cb1-10"></a>      )</span><span id="cb1-11"><a href="#cb1-11"></a>    )</span><span id="cb1-12"><a href="#cb1-12"></a>  )</span></code></pre></div> ',do:'<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">const</span> personFromId <span class="op">=</span> (id<span class="op">:</span> <span class="dt">number</span>)<span class="op">:</span> Option<span class="op">&lt;</span>Person<span class="op">&gt;</span> <span class="kw">=&gt;</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="fu">Do</span>(option)</span><span id="cb1-3"><a href="#cb1-3"></a>    .<span class="fu">bind</span>(<span class="st">&quot;name&quot;</span><span class="op">,</span> <span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> nameById))</span><span id="cb1-4"><a href="#cb1-4"></a>    .<span class="fu">bind</span>(<span class="st">&quot;city&quot;</span><span class="op">,</span> <span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> cityById))</span><span id="cb1-5"><a href="#cb1-5"></a>    .<span class="fu">return</span>((<span class="op">{</span> name<span class="op">,</span> city <span class="op">}</span>) <span class="kw">=&gt;</span> (<span class="op">{</span> id<span class="op">,</span> name<span class="op">,</span> city <span class="op">}</span>))</span></code></pre></div> ',sequence:'<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">const</span> personFromId <span class="op">=</span> (id<span class="op">:</span> <span class="dt">number</span>)<span class="op">:</span> Option<span class="op">&lt;</span>Person<span class="op">&gt;</span> <span class="kw">=&gt;</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="fu">sequenceS</span>(option)(<span class="op">{</span></span><span id="cb1-3"><a href="#cb1-3"></a>    id<span class="op">:</span> <span class="fu">some</span>(id)<span class="op">,</span></span><span id="cb1-4"><a href="#cb1-4"></a>    name<span class="op">:</span> <span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> nameById)<span class="op">,</span></span><span id="cb1-5"><a href="#cb1-5"></a>    city<span class="op">:</span> <span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> cityById)<span class="op">,</span></span><span id="cb1-6"><a href="#cb1-6"></a>  <span class="op">}</span>)</span></code></pre></div> '},m={ap:'<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="ot">personFromId ::</span> <span class="dt">Int</span> <span class="ot">-&gt;</span> <span class="dt">Maybe</span> <span class="dt">Person</span></span><span id="cb1-2"><a href="#cb1-2"></a>personFromId <span class="fu">id</span> <span class="ot">=</span></span><span id="cb1-3"><a href="#cb1-3"></a>  { <span class="fu">id</span>, name<span class="op">:</span> _, city<span class="op">:</span> _ }</span><span id="cb1-4"><a href="#cb1-4"></a>    <span class="op">&lt;$&gt;</span> Map.lookup <span class="fu">id</span> nameById</span><span id="cb1-5"><a href="#cb1-5"></a>    <span class="op">&lt;*&gt;</span> Map.lookup <span class="fu">id</span> cityById</span></code></pre></div> ',chain:'<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="ot">personFromId ::</span> <span class="dt">Int</span> <span class="ot">-&gt;</span> <span class="dt">Maybe</span> <span class="dt">Person</span></span><span id="cb1-2"><a href="#cb1-2"></a>personFromId <span class="fu">id</span> <span class="ot">=</span></span><span id="cb1-3"><a href="#cb1-3"></a>  Map.lookup <span class="fu">id</span> nameById</span><span id="cb1-4"><a href="#cb1-4"></a>    <span class="op">&gt;&gt;=</span> \\name <span class="ot">-&gt;</span></span><span id="cb1-5"><a href="#cb1-5"></a>        Map.lookup <span class="fu">id</span> cityById</span><span id="cb1-6"><a href="#cb1-6"></a>          <span class="op">&lt;#&gt;</span> \\city <span class="ot">-&gt;</span></span><span id="cb1-7"><a href="#cb1-7"></a>              { <span class="fu">id</span>, name, city }</span></code></pre></div> ',do:'<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="ot">personFromId ::</span> <span class="dt">Int</span> <span class="ot">-&gt;</span> <span class="dt">Maybe</span> <span class="dt">Person</span></span><span id="cb1-2"><a href="#cb1-2"></a>personFromId <span class="fu">id</span> <span class="ot">=</span> <span class="kw">do</span></span><span id="cb1-3"><a href="#cb1-3"></a>  name <span class="ot">&lt;-</span> Map.lookup <span class="fu">id</span> nameById</span><span id="cb1-4"><a href="#cb1-4"></a>  city <span class="ot">&lt;-</span> Map.lookup <span class="fu">id</span> nameById</span><span id="cb1-5"><a href="#cb1-5"></a>  <span class="fu">pure</span> { <span class="fu">id</span>, name, city }</span></code></pre></div> ',sequence:'<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="ot">personFromId ::</span> <span class="dt">Int</span> <span class="ot">-&gt;</span> <span class="dt">Maybe</span> <span class="dt">Person</span></span><span id="cb1-2"><a href="#cb1-2"></a>personFromId <span class="fu">id</span> <span class="ot">=</span></span><span id="cb1-3"><a href="#cb1-3"></a>  sequenceRecord</span><span id="cb1-4"><a href="#cb1-4"></a>    { <span class="fu">id</span><span class="op">:</span> <span class="dt">Just</span> <span class="fu">id</span></span><span id="cb1-5"><a href="#cb1-5"></a>    , name<span class="op">:</span> Map.lookup <span class="fu">id</span> nameById</span><span id="cb1-6"><a href="#cb1-6"></a>    , city<span class="op">:</span> Map.lookup <span class="fu">id</span> cityById</span><span id="cb1-7"><a href="#cb1-7"></a>    }</span></code></pre></div> '},h={chain:'<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">const</span> personFromId <span class="op">=</span> (id<span class="op">:</span> <span class="dt">number</span>)<span class="op">:</span> Option<span class="op">&lt;</span>Person<span class="op">&gt;</span> <span class="kw">=&gt;</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="fu">pipe</span>(<span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> nameAndCityIdByNameId)<span class="op">,</span> nameAndCityOption <span class="kw">=&gt;</span></span><span id="cb1-3"><a href="#cb1-3"></a>    <span class="va">option</span><span class="op">.</span><span class="fu">chain</span>(nameAndCityOption<span class="op">,</span> (<span class="op">{</span> name<span class="op">,</span> cityId <span class="op">}</span>) <span class="kw">=&gt;</span></span><span id="cb1-4"><a href="#cb1-4"></a>      <span class="fu">pipe</span>(<span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(cityId<span class="op">,</span> cityById)<span class="op">,</span> cityOption <span class="kw">=&gt;</span></span><span id="cb1-5"><a href="#cb1-5"></a>        <span class="va">option</span><span class="op">.</span><span class="fu">map</span>(cityOption<span class="op">,</span> city <span class="kw">=&gt;</span> (<span class="op">{</span></span><span id="cb1-6"><a href="#cb1-6"></a>          id<span class="op">,</span></span><span id="cb1-7"><a href="#cb1-7"></a>          name<span class="op">,</span></span><span id="cb1-8"><a href="#cb1-8"></a>          city<span class="op">,</span></span><span id="cb1-9"><a href="#cb1-9"></a>        <span class="op">}</span>))</span><span id="cb1-10"><a href="#cb1-10"></a>      )</span><span id="cb1-11"><a href="#cb1-11"></a>    )</span><span id="cb1-12"><a href="#cb1-12"></a>  )</span></code></pre></div> ',do:'<div class="sourceCode" id="cb1"><pre class="sourceCode typescript"><code class="sourceCode typescript"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">const</span> personFromId <span class="op">=</span> (id<span class="op">:</span> <span class="dt">number</span>)<span class="op">:</span> Option<span class="op">&lt;</span>Person<span class="op">&gt;</span> <span class="kw">=&gt;</span></span><span id="cb1-2"><a href="#cb1-2"></a>  <span class="fu">Do</span>(option)</span><span id="cb1-3"><a href="#cb1-3"></a>    .<span class="fu">bind</span>(<span class="st">&quot;nameAndCity&quot;</span><span class="op">,</span> <span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(id<span class="op">,</span> nameAndCityIdByNameId))</span><span id="cb1-4"><a href="#cb1-4"></a>    .<span class="fu">bindL</span>(<span class="st">&quot;city&quot;</span><span class="op">,</span> (<span class="op">{</span> nameAndCity <span class="op">}</span>) <span class="kw">=&gt;</span></span><span id="cb1-5"><a href="#cb1-5"></a>      <span class="va">Record</span><span class="op">.</span><span class="fu">lookup</span>(<span class="va">nameAndCity</span><span class="op">.</span><span class="at">cityId</span><span class="op">,</span> cityById)</span><span id="cb1-6"><a href="#cb1-6"></a>    )</span><span id="cb1-7"><a href="#cb1-7"></a>    .<span class="fu">return</span>((<span class="op">{</span> nameAndCity<span class="op">,</span> city <span class="op">}</span>) <span class="kw">=&gt;</span> (<span class="op">{</span> id<span class="op">,</span> name<span class="op">:</span> <span class="va">nameAndCity</span><span class="op">.</span><span class="at">name</span><span class="op">,</span> city <span class="op">}</span>))</span></code></pre></div> '},f={chain:'<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="ot">personFromId ::</span> <span class="dt">Int</span> <span class="ot">-&gt;</span> <span class="dt">Maybe</span> <span class="dt">Person</span></span><span id="cb1-2"><a href="#cb1-2"></a>personFromId <span class="fu">id</span> <span class="ot">=</span></span><span id="cb1-3"><a href="#cb1-3"></a>  Map.lookup <span class="fu">id</span> nameAndCityIdByNameId</span><span id="cb1-4"><a href="#cb1-4"></a>    <span class="op">&gt;&gt;=</span> \\{ name, cityId } <span class="ot">-&gt;</span></span><span id="cb1-5"><a href="#cb1-5"></a>        Map.lookup cityId cityNameById</span><span id="cb1-6"><a href="#cb1-6"></a>          <span class="op">&lt;#&gt;</span> \\city <span class="ot">-&gt;</span></span><span id="cb1-7"><a href="#cb1-7"></a>              { <span class="fu">id</span>, name, city }</span></code></pre></div> ',do:'<div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1"></a><span class="ot">personFromId ::</span> <span class="dt">Int</span> <span class="ot">-&gt;</span> <span class="dt">Maybe</span> <span class="dt">Person</span></span><span id="cb1-2"><a href="#cb1-2"></a>personFromId <span class="fu">id</span> <span class="ot">=</span> <span class="kw">do</span></span><span id="cb1-3"><a href="#cb1-3"></a>  { name, cityId } <span class="ot">&lt;-</span> Map.lookup <span class="fu">id</span> nameAndCityIdByNameId</span><span id="cb1-4"><a href="#cb1-4"></a>  city <span class="ot">&lt;-</span> Map.lookup cityId cityNameById</span><span id="cb1-5"><a href="#cb1-5"></a>  <span class="fu">pure</span> { <span class="fu">id</span>, name, city }</span></code></pre></div> '};var y=document.getElementById("root");Object(l.render)(c.createElement(function(){return e.a.createElement("main",null,e.a.createElement("h1",{id:"comparison-of-monadic-and-applicative-syntax"},"An overview of monadic and applicative syntax"),e.a.createElement("p",null,"There is a variety of syntax surrounding monadic and applicative operations. This document aims to provide a simple reference of comparing the different syntax using a trivial example. We will also note that anything that can be done with applicative syntax (",e.a.createElement("code",null,"sequenceS"),"/",e.a.createElement("code",null,"sequenceT"),", ",e.a.createElement("code",null,"ap"),") can be accomplished in monadic syntax (",e.a.createElement("code",null,"chain"),", ",e.a.createElement("code",null,"Do"),"), but the inverse is\u2014importantly\u2014",e.a.createElement("em",null,"not")," the case: ",e.a.createElement("code",null,"chain")," ","and ",e.a.createElement("code",null,"Do")," are more specialized than ",e.a.createElement("code",null,"sequence(S|T)")," ","and ",e.a.createElement("code",null,"ap"),", and uses of the former cannot always be swapped out for the latter."),e.a.createElement("p",null,"We\u2019ll use ",e.a.createElement("code",null,"fp-ts")," (and ",e.a.createElement("code",null,"fp-ts-contrib"),") libraries for the TypeScript examples and also show what would be the equivalent code in PureScript. I think it might help cement an understanding by seeing how the examples translate in a language with top-level support for applicative and monadic syntax."),e.a.createElement("h2",{id:"independent-lookups"},"Independent lookups"),e.a.createElement("p",null,"Let\u2019s suppose we have a couple lookup tables that have an integer value as key."),e.a.createElement("h4",{id:"name-by-id"},"Name by ID"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",{className:"header"},e.a.createElement("th",null,"ID"),e.a.createElement("th",null,"Name"))),e.a.createElement("tbody",null,e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"1"),e.a.createElement("td",null,"Alice")),e.a.createElement("tr",{className:"even"},e.a.createElement("td",null,"2"),e.a.createElement("td",null,"Bob")),e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"3"),e.a.createElement("td",null,"Carol")),e.a.createElement("tr",{className:"even"},e.a.createElement("td",null,"4"),e.a.createElement("td",null,"Dave")))),e.a.createElement("h4",{id:"city-by-id"},"City by ID"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",{className:"header"},e.a.createElement("th",null,"ID"),e.a.createElement("th",null,"City"))),e.a.createElement("tbody",null,e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"1"),e.a.createElement("td",null,"Boston")),e.a.createElement("tr",{className:"even"},e.a.createElement("td",null,"2"),e.a.createElement("td",null,"Chicago")),e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"3"),e.a.createElement("td",null,"Miami")))),e.a.createElement("p",null,"And we also have a ",e.a.createElement("code",null,"Person")," record type that has an ID, name, and city. In code this could be represented like:"),e.a.createElement(o,{ts:{types:d},purs:{types:r}}),e.a.createElement("p",null,"Now let\u2019s suppose we want to construct a ",e.a.createElement("code",null,"Person")," value given an ID."),e.a.createElement(o,{ts:u,purs:m}),e.a.createElement("p",null,"We return an ",e.a.createElement("code",null,"Option<Person>")," because either or both lookups might fail\u2014for example ",e.a.createElement("code",null,"personFromId(0)")," or"," ",e.a.createElement("code",null,"personFromId(4)"),". These lookups (in the name table and the city table) can be performed ",e.a.createElement("em",null,"independent of one another"),", the input of one does not rely on the input of the other, and for that reason we can use applicative syntax."),e.a.createElement("h2",{id:"sequential-lookups"},"Sequential lookups"),e.a.createElement("p",null,"Confusingly, if these lookups needed to be ",e.a.createElement("em",null,"sequenced")," so that the input of one relied on the output of another, we ",e.a.createElement("em",null,"would not")," ","be able to use applicative operations (",e.a.createElement("code",null,"sequenceS"),"/",e.a.createElement("code",null,"sequenceT")," or ",e.a.createElement("code",null,"ap"),"). To see what that means, let\u2019s adjust our \u201cName by ID\u201d table to have a product of \u201cName\u201d and \u201cCity ID\u201d."),e.a.createElement("h4",{id:"name-city-id-by-person-id"},"Name & City ID by Person ID"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",{className:"header"},e.a.createElement("th",null,"ID"),e.a.createElement("th",null,"Name"),e.a.createElement("th",null,"City ID"))),e.a.createElement("tbody",null,e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"1"),e.a.createElement("td",null,"Alice"),e.a.createElement("td",null,"BOS")),e.a.createElement("tr",{className:"even"},e.a.createElement("td",null,"2"),e.a.createElement("td",null,"Bob"),e.a.createElement("td",null,"MIA")),e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"3"),e.a.createElement("td",null,"Carol"),e.a.createElement("td",null,"CHI")),e.a.createElement("tr",{className:"even"},e.a.createElement("td",null,"4"),e.a.createElement("td",null,"Dave"),e.a.createElement("td",null,"BOS")))),e.a.createElement("h4",{id:"city-by-city-id"},"City Name by ID"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",{className:"header"},e.a.createElement("th",null,"ID"),e.a.createElement("th",null,"City"))),e.a.createElement("tbody",null,e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"BOS"),e.a.createElement("td",null,"Boston")),e.a.createElement("tr",{className:"even"},e.a.createElement("td",null,"CHI"),e.a.createElement("td",null,"Chicago")),e.a.createElement("tr",{className:"odd"},e.a.createElement("td",null,"MIA"),e.a.createElement("td",null,"Miami")))),e.a.createElement("p",null,"In code:"),e.a.createElement(o,{ts:{types:i},purs:{types:b}}),e.a.createElement("p",null,"And our ",e.a.createElement("code",null,"personFromId")," function now has to rely on a lookup in the name table and ",e.a.createElement("em",null,"then")," (pending the result of that) a lookup in the city table. This constraint cannot be expressed with applicative ",e.a.createElement("code",null,"sequence(S|T)")," or ",e.a.createElement("code",null,"ap"),", only with monadic ",e.a.createElement("code",null,"Do")," or ",e.a.createElement("code",null,"chain"),"."),e.a.createElement(o,{ts:h,purs:f}))},null),y)},4:function(a,s,n){a.exports=n(12)}},[[4,2,1]]]);
//# sourceMappingURL=main.64c777c5.chunk.js.map