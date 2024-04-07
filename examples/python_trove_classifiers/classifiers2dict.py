import json

classifiers = {}
with open('classifiers.txt', 'r') as file:
    content = file.read()

content = content.split('\n')
for line in content:
    elements = [e.strip(' ') for e in line.split('::')]
    parent = classifiers
    while len(elements):
        parent = parent.setdefault(elements.pop(0), {})


with open('classifiers.json', 'w') as file:
    json.dump(classifiers, file, indent=2)
