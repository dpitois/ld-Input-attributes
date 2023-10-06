import { LdInput, LdLabel } from "@emdgroup-liquid/liquid/dist/react";

function App() {
  return (
    <>
      <div>
        <LdLabel>
          <LdInput disabled={true} /> disabled
        </LdLabel>
      </div>
      <div>
        <LdLabel>
          <LdInput disabled={true} readonly /> disabled + readonly
        </LdLabel>
      </div>
      <div>
        <LdLabel>
          <LdInput disabled={true} readonly={true} /> disabled + readonly
        </LdLabel>
      </div>
      <div>
        <LdLabel>
          <LdInput disabled={true} readonly={"true"} /> disabled +
          readonly.string
        </LdLabel>
      </div>
      <div>
        <LdLabel>
          <LdInput readonly={"true"} /> disabled + readonly.string
        </LdLabel>
      </div>
      <div>
        <LdLabel>
          <LdInput disabled={"true"} /> disabled.string
        </LdLabel>
      </div>
    </>
  );
}

export default App;
