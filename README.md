# eslint-plugin-nosettimeout

forbidden set a settimeout time

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nosettimeout`:

```
$ npm install eslint-plugin-nosettimeout --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nosettimeout` globally.

## Usage

Add `nosettimeout` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nosettimeout"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nosettimeout/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





