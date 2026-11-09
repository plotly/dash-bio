"""Unit tests for ManhattanPlot string chromosome support (issue #772)."""

import numpy as np
import pandas as pd
import pytest

from dash_bio import ManhattanPlot

# ---------------------------------------------------------------------------
# Shared fixtures
# ---------------------------------------------------------------------------

RNG = np.random.default_rng(42)
N = 300  # rows per test dataframe


def _make_df(chroms, n=N):
    """Return a minimal GWAS-like dataframe with the given chromosome labels."""
    chrom_vals = RNG.choice(chroms, n)
    return pd.DataFrame(
        {
            "CHR": chrom_vals,
            "BP": RNG.integers(1, 1_000_000, n),
            "P": RNG.uniform(1e-10, 1.0, n),
        }
    )


# ---------------------------------------------------------------------------
# Tests: string chromosome column
# ---------------------------------------------------------------------------


def test_string_chromosomes_no_error():
    """ManhattanPlot must not raise TypeError for a string CHR column."""
    df = _make_df(["1", "2", "3", "X", "Y", "MT"])
    fig = ManhattanPlot(df, chrm="CHR", bp="BP", p="P", snp=None, gene=None)
    assert fig is not None


def test_string_chromosomes_trace_count():
    """One scatter trace per unique chromosome must be produced."""
    chroms = ["1", "2", "X", "Y", "MT"]
    df = _make_df(chroms)
    fig = ManhattanPlot(df, chrm="CHR", bp="BP", p="P", snp=None, gene=None)
    # highlight=True adds a highlighted trace; count non-empty chroms only
    trace_names = {t.name for t in fig.data}
    for c in chroms:
        assert any(c in name for name in trace_names), (
            f"No trace found for chromosome {c!r}; got {trace_names}"
        )


def test_string_chromosomes_tick_labels_genomic_order():
    """X-axis tick labels must follow genomic order: 1,2,...,22,X,Y,MT."""
    chroms = ["MT", "X", "2", "1", "Y", "10"]
    df = _make_df(chroms)
    fig = ManhattanPlot(df, chrm="CHR", bp="BP", p="P", snp=None, gene=None)
    tick_labels = list(fig.layout.xaxis.ticktext)
    assert tick_labels == ["1", "2", "10", "X", "Y", "MT"], (
        f"Expected genomic sort order but got {tick_labels}"
    )


def test_string_chromosomes_crowded_label_suppression():
    """With >10 chromosomes, every other tick label must be suppressed."""
    chroms = [str(i) for i in range(1, 23)] + ["X", "Y"]  # 24 chromosomes
    df = _make_df(chroms, n=1000)
    fig = ManhattanPlot(df, chrm="CHR", bp="BP", p="P", snp=None, gene=None)
    tick_labels = list(fig.layout.xaxis.ticktext)
    assert len(tick_labels) == 24
    empty = [lbl for lbl in tick_labels if lbl == ""]
    assert len(empty) == 12, (
        f"Expected 12 suppressed labels for 24 chromosomes, got {len(empty)}"
    )


def test_single_string_chromosome():
    """A dataframe with a single string chromosome must produce a valid figure."""
    df = _make_df(["X"])
    fig = ManhattanPlot(df, chrm="CHR", bp="BP", p="P", snp=None, gene=None)
    assert len(fig.data) >= 1


# ---------------------------------------------------------------------------
# Tests: numeric chromosome column (regression — must still work)
# ---------------------------------------------------------------------------


def test_numeric_chromosomes_regression():
    """Numeric chromosome columns must continue to work after the change."""
    df = _make_df([1, 2, 3, 4, 5])
    fig = ManhattanPlot(df, chrm="CHR", bp="BP", p="P", snp=None, gene=None)
    assert fig is not None
    assert len(fig.data) >= 1


def test_numeric_chromosomes_tick_count():
    """Tick count must equal the number of unique numeric chromosomes."""
    df = _make_df([1, 2, 3])
    fig = ManhattanPlot(df, chrm="CHR", bp="BP", p="P", snp=None, gene=None)
    assert len(fig.layout.xaxis.tickvals) == 3
