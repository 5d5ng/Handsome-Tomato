import os
import wikipediaapi

def crawling(lst, what):
    for i in lst:
        page_py = wiki.page(i)
        BASE_DIR = os.path.dirname(os.path.abspath(__file__))
        with open(BASE_DIR+'/'+what+'/'+i+".txt", "w", encoding='utf-8') as f:
            f.write(page_py.summary)

wiki=wikipediaapi.Wikipedia('ko')
flower = ['나팔꽃', '코스모스 (꽃)', '해바라기', '진달래', '장미', '튤립']
crawling(flower, 'flower')

fruits = ['체리', '앵두', '도토리', '토마토']
crawling(fruits, 'fruits')

mushroom = ['팽이버섯', '송이버섯', '양송이버섯', '느타리버섯', '목이버섯', '표고버섯']
crawling(mushroom, 'mushroom')

plant = ['달래', '명이나물', '쑥', '시금치']
crawling(plant, 'plant')