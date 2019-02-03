package com.alexadothis;

public enum DoThisCommands {
	SHUTDOWN("shutdown -s -t 3600"),
	NOT_SHUTDOWN("shutdown -a");
	
	private String command;

	private DoThisCommands(String command) {
		this.command = command;
	}
	
	 public String getCommand() {
	        return this.command;
	    }
}
