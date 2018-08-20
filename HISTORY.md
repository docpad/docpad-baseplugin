# History

## v1.0.1 2018 August 20
- Add `isDocPadPlugin` static method, to make it easier for DocPad to detect plugins
- Support getters for `name` and `priority`
- Internal changes
    - No need for dereferencing `config` when `initialConfig` already contains it `config`
    - No need for dereferencing `instanceConfig` as it shouldn't be set yet

## v1.0.0 2018 August 20
- Abstracted out from DocPad v6.80.9 and converted to esnext
