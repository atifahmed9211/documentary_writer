from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
import json
from .forms import *
from django.core.files.storage import FileSystemStorage
import re

def home(request):
    return render(request,'scriptingApp/script.html')

def scripting(request):
    if request.method=="POST":
        fs = FileSystemStorage()
        scriptFile=request.FILES['scriptFile']
        filename = fs.save(scriptFile.name, scriptFile)
        uploaded_file_path = fs.path(filename)
        print('absolute file path', uploaded_file_path)
        #open json file
        myJsonFile=open(uploaded_file_path,'r')
        jsonData=myJsonFile.read()
        #parse
        obj=json.loads(jsonData)
        print(obj['act1'])
        return JsonResponse({'obj1':obj["act1"],'obj2':obj["act2"],'obj3':obj["act3"],'obj4':obj["act4"]})
    else:
        # open json file
        myJsonFile=open('static\jsonFiles\DocumentaryScriptTemplate.json','r')
        jsonData=myJsonFile.read()
        #parse
        obj=json.loads(jsonData)
        print(obj['act1'])
        return JsonResponse({'obj1':obj["act1"],'obj2':obj["act2"],'obj3':obj["act3"],'obj4':obj["act4"]})

def transcript(request):
    if request.method=="POST":
        fs = FileSystemStorage()
        transcriptFile=request.FILES['transcriptFile']
        filename = fs.save(transcriptFile.name, transcriptFile)
        uploaded_file_path = fs.path(filename)
        print('absolute file path', uploaded_file_path)
        # read file line by line
        file = open(uploaded_file_path, "r")
        lines = file.readlines()
        file.close()

        text = ''
        blank="\n"
        for line in lines:
            #text += ' ' + line.rstrip() + blank
            text += line
            text+="<br/>"

        return JsonResponse({"transcript_text":text})
    else:
        return render(request,'scriptingApp/transcript.html')
