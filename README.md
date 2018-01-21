# MemeGen

[![npm version](https://badge.fury.io/js/memegen.svg)](https://badge.fury.io/js/memegen)
[![npm downloads](https://img.shields.io/npm/dm/memegen.svg)](https://img.shields.io/npm/dm/memegen.svg)

A meme generator.

![](./output/showcase.png)

# How to use

## Install 

```bash 
npm install memegen -g
```

---

## Usage

### Static Template (For Drake meme)
* Example:

```bash
memegen -1 upper.png -2 lower.png -o output_dir -f output_filename -t png
```

* See some example!
    * Bang!
    ![](output/bang.png)

---

### Dynamic Configuration
* [Config file format](https://github.com/toolbuddy/memegen/wiki/Configuration)

* Example:

```bash
memegen -c <config>.json -f <output_file_name> -t png -o <output_dir>
```

* See some example, which generate from specific configuration file!
    * Cereal guy meme
        * [configure file](config_cereal.json)
        * `memegen -c config_cereal.json -f use_config_cereal -t png -o output`
        ![](output/use_config_cereal.png)
    * Peter parker meme
        * [configure file](config.json)
        * `memegen -c config.json -f use_config -t png -o output`
        ![](output/use_config.png)

* or just using `--help`:

```bash
memegen --help
```