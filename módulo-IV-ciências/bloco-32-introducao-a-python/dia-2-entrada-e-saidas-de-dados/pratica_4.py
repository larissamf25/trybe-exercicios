import json
import csv

with open("books.json") as file:
    content = file.read()
    books = json.loads(content)
    amount = len(books)
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1/amount
with open("report.csv", 'w') as file:
    writer = csv.writer(file)
    headers = ["Category", "Percentage"]
    writer.writerow(headers)
    writer.writerows(categories)
