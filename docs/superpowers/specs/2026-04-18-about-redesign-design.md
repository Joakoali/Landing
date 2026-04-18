# About Section Redesign

**Date:** 2026-04-18
**Status:** Approved

## Problem

The About section mixes plural and singular voice inconsistently:
- `"Quiénes somos"` implies a team
- `"Detrás de Ixtal está Joaquín"` (third person) then immediately `"Creo sitios"` (first person)
- `"cada proyecto se construye"` returns to impersonal passive

This creates a jarring read and undermines trust with potential clients.

## Decision

**Option B — Personal brand behind a brand.**

Hero and Services keep Ixtal's "nosotros" voice (brand speaking). The About section intentionally breaks to first person to humanize — this is a narrative device, not an error. Clients see who they're working with; the Ixtal brand name still carries professional weight.

Target audience: primarily small businesses, open to mid-size companies.

## Scope

Changes are limited to `src/components/About.tsx` only. Hero and Services already use "nosotros" consistently and require no changes.

## New Copy

| Element | Current | New |
|---------|---------|-----|
| Label | `Sobre Ixtal` | `Sobre Ixtal` (unchanged) |
| H2 | `Quiénes somos` | `El desarrollador detrás` |
| P1 | `Detrás de Ixtal está Joaquín Alizegui, desarrollador web en Barcelona. Creo sitios rápidos, modernos y optimizados que ayudan a negocios a crecer online.` | `Soy Joaquín, desarrollador web en Barcelona. Trabajo con negocios que quieren una presencia online que los represente de verdad — rápida, bien construida y con diseño que importa.` |
| P2 | `Desde landing pages hasta plataformas completas, cada proyecto se construye con código limpio, buen diseño y foco en resultados.` | `Desde landing pages hasta plataformas completas, cada proyecto lo trato como si fuera el mío: código limpio, buen diseño y foco en resultados.` |

## What Does Not Change

- Highlight cards (3+ proyectos, React & Next.js, Barcelona) — unchanged
- Layout, styling, and component structure — unchanged
- All other components — unchanged
