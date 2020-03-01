import React from "react";
import "./styles.css";
import { CodeBlock } from "./snippets/CodeBlock";

// 1
import ts1types from "./snippets/1/ts-types-and-tables";
import purs1types from "./snippets/1/purs-types-and-tables";
// 2
import ts2sequence from "./snippets/2/ts-1-sequence";
import ts2ap from "./snippets/2/ts-1-ap";
import ts2chain from "./snippets/2/ts-1-chain";
import ts2do from "./snippets/2/ts-1-do";
import purs2sequence from "./snippets/2/purs-1-sequence";
import purs2ap from "./snippets/2/purs-1-ap";
import purs2chain from "./snippets/2/purs-1-chain";
import purs2do from "./snippets/2/purs-1-do";
// 3
import ts3types from "./snippets/3/ts-types-and-tables";
import purs3types from "./snippets/3/purs-types-and-tables";
// 4
import ts4chain from "./snippets/4/ts-chain";
import ts4do from "./snippets/4/ts-do";
import purs4chain from "./snippets/4/purs-chain";
import purs4do from "./snippets/4/purs-do";

const ts2 = {
  ap: ts2ap,
  chain: ts2chain,
  do: ts2do,
  sequence: ts2sequence
};
const purs2 = {
  ap: purs2ap,
  chain: purs2chain,
  do: purs2do,
  sequence: purs2sequence
};
const ts4 = {
  chain: ts4chain,
  do: ts4do
};
const purs4 = {
  chain: purs4chain,
  do: purs4do
};

export default function App() {
  return (
    <main>
      <h1 id="comparison-of-monadic-and-applicative-syntax">
        An overview of monadic and applicative syntax
      </h1>
      <p>
        There is a variety of syntax surrounding monadic and applicative
        operations. This document aims to provide a simple reference of
        comparing the different syntax using a trivial example. We will also
        note that anything that can be done with applicative syntax (
        <code>sequenceS</code>/<code>sequenceT</code>, <code>ap</code>) can be
        accomplished in monadic syntax (<code>chain</code>, <code>Do</code>),
        but the inverse is—importantly—<em>not</em> the case: <code>chain</code>{" "}
        and <code>Do</code> are more powerful than <code>sequence(S|T)</code>{" "}
        and <code>ap</code>, and uses of the former cannot always be swapped out
        for the latter.
      </p>
      <p>
        We'll use <code>fp-ts</code> (and <code>fp-ts-contrib</code>) libraries
        for the TypeScript examples and also show what would be the equivalent
        code in PureScript. I think it might help cement an understanding by
        seeing how the examples translate in a language with top-level support
        for applicative and monadic syntax.
      </p>
      <h2 id="independent-lookups">Independent lookups</h2>
      <p>
        Let’s suppose we have a couple lookup tables that have an integer value
        as key.
      </p>
      <h4 id="name-by-id">Name by ID</h4>
      <table>
        <thead>
          <tr className="header">
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd">
            <td>1</td>
            <td>Alice</td>
          </tr>
          <tr className="even">
            <td>2</td>
            <td>Bob</td>
          </tr>
          <tr className="odd">
            <td>3</td>
            <td>Carol</td>
          </tr>
          <tr className="even">
            <td>4</td>
            <td>Dave</td>
          </tr>
        </tbody>
      </table>
      <h4 id="city-by-id">City by ID</h4>
      <table>
        <thead>
          <tr className="header">
            <th>ID</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd">
            <td>1</td>
            <td>Boston</td>
          </tr>
          <tr className="even">
            <td>2</td>
            <td>Chicago</td>
          </tr>
          <tr className="odd">
            <td>3</td>
            <td>Miami</td>
          </tr>
        </tbody>
      </table>
      <p>
        And we also have a <code>Person</code> record type that has an ID, name,
        and city. In code this could be represented like:
      </p>
      <CodeBlock ts={{ types: ts1types }} purs={{ types: purs1types }} />
      <p>
        Now let’s suppose we want to construct a <code>Person</code> value given
        an ID.
      </p>
      <CodeBlock ts={ts2} purs={purs2} />
      <p>
        We return an <code>Option&lt;Person&gt;</code> because either or both
        lookups might fail—for example <code>personFromId(0)</code> or{" "}
        <code>personFromId(4)</code>. These lookups (in the name table and the
        city table) can be performed <em>independent of one another</em>, the
        input of one does not rely on the input of the other, and for that
        reason we can use applicative syntax.
      </p>
      <h2 id="sequential-lookups">Sequential lookups</h2>
      <p>
        Confusingly, if these lookups needed to be <em>sequenced</em> so that
        the input of one relied on the output of another, we <em>would not</em>{" "}
        be able to use applicative operations (<code>sequenceS</code>/
        <code>sequenceT</code> or <code>ap</code>). To see what that means,
        let’s adjust our “Name by ID” table to have a product of “Name” and
        “City ID”.
      </p>
      <h4 id="name-city-id-by-person-id">Name &amp; City ID by Person ID</h4>
      <table>
        <thead>
          <tr className="header">
            <th>ID</th>
            <th>Name</th>
            <th>City ID</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd">
            <td>1</td>
            <td>Alice</td>
            <td>BOS</td>
          </tr>
          <tr className="even">
            <td>2</td>
            <td>Bob</td>
            <td>MIA</td>
          </tr>
          <tr className="odd">
            <td>3</td>
            <td>Carol</td>
            <td>CHI</td>
          </tr>
          <tr className="even">
            <td>4</td>
            <td>Dave</td>
            <td>BOS</td>
          </tr>
        </tbody>
      </table>
      <h4 id="city-by-city-id">City Name by ID</h4>
      <table>
        <thead>
          <tr className="header">
            <th>ID</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd">
            <td>BOS</td>
            <td>Boston</td>
          </tr>
          <tr className="even">
            <td>CHI</td>
            <td>Chicago</td>
          </tr>
          <tr className="odd">
            <td>MIA</td>
            <td>Miami</td>
          </tr>
        </tbody>
      </table>
      <p>In code:</p>
      <CodeBlock ts={{ types: ts3types }} purs={{ types: purs3types }} />
      <p>
        And our <code>personFromId</code> function now has to rely on a lookup
        in the name table and <em>then</em> (pending the result of that) a
        lookup in the city table. This constraint cannot be expressed with
        applicative <code>sequence(S|T)</code> or <code>ap</code>, only with
        monadic <code>Do</code> or <code>chain</code>.
      </p>
      <CodeBlock ts={ts4} purs={purs4} />
    </main>
  );
}
