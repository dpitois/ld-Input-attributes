import {
  LdInput,
  LdLabel,
  LdTypo,
} from "@emdgroup-liquid/liquid/dist/react-define-excluded";
// import { LdInput, LdLabel, LdTypo } from "@emdgroup-liquid/liquid/dist/react";

function App() {
  return (
    <>
      <LdTypo>Still editable</LdTypo>
      <div>
        <LdLabel position="right">
          <LdInput disabled={true} /> disabled with boolean
        </LdLabel>
      </div>
      <div>
        <LdLabel position="right">
          <LdInput disabled={true} readonly /> disabled with boolean + readonly
        </LdLabel>
      </div>
      <div>
        <LdLabel position="right">
          <LdInput disabled={true} readonly={true} /> disabled with boolean +
          readonly with boolean
        </LdLabel>
      </div>
      <LdTypo>Not editable (as expected)</LdTypo>
      <div>
        <LdLabel position="right">
          <LdInput disabled={true} readonly="true" /> disabled with boolean +
          readonly as string
        </LdLabel>
      </div>
      <div>
        <LdLabel position="right">
          <LdInput readonly="true" /> readonly as string
        </LdLabel>
      </div>
      <div>
        <LdLabel position="right">
          <LdInput disabled="true" /> disabled as string
        </LdLabel>
      </div>
    </>
  );
}

export default App;
