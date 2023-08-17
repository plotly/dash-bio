import pandas as pd
import numpy as np
import plotly.express as px

def MassSpectrum(df_peaks, title="Experimental Spectrum", range=None):

    """
    Renders mass spectrum plot using DataFrame of m/z and intensity values.

    Args:
        df_peaks (pd.DataFrame): Peak table with columns "m/z" and intensity"

    Returns:
        plotly.Figure: Mass spectrum plot, with m/z values on the x-axis
        and intensity values (normalized to 1) on the y-axis.
    """

    if range is None:
        min_mz = df_peaks["m/z"].min() - 10
        max_mz = df_peaks["m/z"].max() + 10
        range = [min_mz, max_mz]

    plot = px.bar(
        df_peaks, 
        title=title, 
        x="m/z", 
        y="intensity", 
        height=400)
    
    plot.update_layout(
        showlegend=False, 
        transition_duration=500, 
        clickmode="event",
        margin=dict(t=75, b=75, l=0, r=0))
    
    plot.update_xaxes(
        title="",
        range=range,
        side="bottom")
    
    plot.update_yaxes(title="")
    
    plot.update_traces(
        textposition="outside",
        hovertemplate="m/z: %{x}<br>Intensity: %{y}<br>")

    return plot
