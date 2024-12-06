import whisper

# Load the model (choose from 'tiny', 'base', 'small', 'medium', 'large')
model = whisper.load_model("base")

result = model.transcribe("Eagle Squawk Episode 2.mp3")
print(result["text"])
with open("transcript3.txt", "a") as file:
    file.write(result["text"])
