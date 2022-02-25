
from_future_import print_function
import json
import urllib
import boto3
import datetime


print('loading function')
def process_process(message, context):
    #Input Example
    #{'TranscationType': 'PURCHASE'}
    #1. Log input message
    print("Received message from Step Function:")
    print(message)
    #2. Construct response object

    response = {}
    response['TransactionType'] = message['TransactionType']
    response['Timestamp'] = datetime.datetime,now().strftime("%Y-%m-%d-%H-%M-%S")
    response['Message'] = 'Gello from lamda land inside the metaverse'
    return response