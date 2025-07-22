import warnings

from my_crew.crew import MyCrew

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

def run_crew(topic):
    """
    Run the crew.
    """
    inputs = {
        'topic': topic
    }
    
    try:
      result = MyCrew().crew().kickoff(inputs=inputs)
      return result.raw

    except Exception as e:
        raise Exception(f"An error occurred while running the crew: {e}")