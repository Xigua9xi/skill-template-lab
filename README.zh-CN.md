# skill-template-lab

[English](README.md) | 简体中文

`skill-template-lab` 是一组用于构建可复用 skill / agent workflow 的模板和校验器。

它适合希望把重复工作沉淀成明确 skill 的团队使用。相比一次性 prompt，skill 模板应该更清楚地定义适用场景、输入、流程、验证方式和安全边界。

## 项目包含什么

- 三个内置 skill 模板。
- 模板 metadata 格式。
- `skill.json` 的 JSON Schema。
- 校验模板的 CLI。
- 测试：验证正常模板能通过，坏模板能失败。

## 模板列表

| 模板 | 用途 |
| --- | --- |
| `minimal-skill` | 单一、窄范围、可重复的工作流。 |
| `cli-tool-skill` | 封装命令行工具的工作流。 |
| `doc-review-skill` | 文档审阅或改写工作流。 |

## 快速开始

```powershell
npm.cmd install
npm.cmd test
npm.cmd run lint
npm.cmd run demo
```

## CLI 用法

先构建：

```powershell
npm.cmd run build
```

校验模板：

```powershell
node dist/cli.js templates
```

## 目录说明

```text
templates/
```

可复用 skill 模板。每个模板包含 `SKILL.md` 和 `skill.json`。

```text
schema/
```

`skill.json` metadata 的 JSON Schema。

```text
src/
```

模板校验逻辑和 CLI 入口。

```text
test/
```

测试内置模板和异常 metadata。

```text
scripts/
```

本地 lint 检查。

## 模板规范

每个模板应该包含：

- `SKILL.md`：面向人和 agent 的工作流说明。
- `skill.json`：包含 `name`、`description`、`entry`、`kind` 的 metadata。

好的模板应该说明：

- 什么时候使用。
- 接受哪些输入。
- 工作流步骤。
- 如何验证结果。
- 安全边界和不应该做的事情。

## 如何扩展

适合后续贡献的方向：

- 增加模板生成命令。
- 使用 JSON Schema 进行真实校验。
- 增加 agent framework adapter 模板。
- 增加模板编写指南和示例。

更多 issue 草稿见 `.github/ISSUE_DRAFTS.md`。

## 发布前注意

- 运行 `npm.cmd test`。
- 运行 `npm.cmd run lint`。
- 不提交 `node_modules/` 或 `dist/`。
- 模板示例应保持通用；如果是垂直领域模板，要先脱敏。
