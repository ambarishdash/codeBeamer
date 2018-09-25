'test
SystemUtil.Run "notepad.exe",""

Window("nativeclass:=Notepad","regexpwndtitle:= Notepad").WaitProperty "visible", True, 30000
If Window("nativeclass:=Notepad","regexpwndtitle:= Notepad").WinEditor("nativeclass:=Edit", "regexpwndclass:=Edit").Exist Then
	Window("nativeclass:=Notepad","regexpwndtitle:= Notepad").WinEditor("nativeclass:=Edit", "regexpwndclass:=Edit").Type "Hello. This is the first program."
	Wait 5
	If Window("nativeclass:=Notepad","regexpwndtitle:= Notepad").WinEditor("nativeclass:=Edit", "regexpwndclass:=Edit").GetROProperty("text") = "Hello. This is the first program." Then
		msgbox "Success"
	Else
		msgbox "Failure"
	End If
Else
	msgbox "Failed to open Notepad"
End If

SystemUtil.CloseProcessByName "notepad.exe"

